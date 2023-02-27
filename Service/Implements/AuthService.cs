using AutoMapper;
using myProject.Authorization;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Auth;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class AuthService : IAuthService
{
    private MySQLDBContext _context;
    private IJwtUtils _jwtUtils;
    private readonly IMapper _mapper;

    public AuthService(
        MySQLDBContext context,
        IJwtUtils jwtUtils,
        IMapper mapper)
    {
        _context = context;
        _jwtUtils = jwtUtils;
        _mapper = mapper;
    }

    public AuthenticateResponse Authenticate(AuthenticateRequest model)
    {
        var user = _context.User.SingleOrDefault(x => x.username == model.username);

        // validate
        if (user == null || !BCrypt.Net.BCrypt.Verify(model.password, user.password))
            throw new AppException("Username or password is incorrect");
        if (user.status == UserStatus.INACTIVE)
            throw new AppException("Account is not active");
        if (user.status == UserStatus.BLOCKED)
            throw new AppException("Account is blocked");
        if (user.status == UserStatus.BANNED)
            throw new AppException("Account is banned");
        if (user.status == UserStatus.DELETED)
            throw new AppException("Account does not exist");
        // authentication successful
        var response = _mapper.Map<AuthenticateResponse>(user);
        // save credential
        Credential credential = new Credential();
        credential.user_id = response.id;
        credential.active = Constants.LOGIN;
        credential.datetime = DateTimeOffset.Now.AddHours(7);
        _context.Credentials.Add(credential);
        _context.SaveChanges();
        response.token = _jwtUtils.GenerateToken(user);
        return response;
    }

    public void Register(RegisterRequest model)
    {
        // validate
        if (_context.User.Any(x => x.username == model.username))
            throw new AppException("Username '" + model.username + "' is already taken");

        if (model.username == null || model.password == null)
            throw new AppException("Username or Password invalid!");
        
        if (model.email == null)
            throw new AppException("Email invalid!");

        if (model.password.Length < 6)
            throw new AppException("Password invalid!");

        if (model.password != model.confirmPassword)
            throw new AppException("Password or Password Confirm incorrect!");

        // map model to new user object
        var user = _mapper.Map<User>(model);

        // hash password
        user.password = BCrypt.Net.BCrypt.HashPassword(model.password);

        // save user
        _context.User.Add(user);
        _context.SaveChanges();
        // find new user created
        var new_user = _context.User.SingleOrDefault(x => x.username == model.username);
        // save credential
        Credential credential = new Credential();
        credential.user_id = new_user.id;
        credential.active = Constants.REGISTER;
        credential.datetime = DateTimeOffset.Now.AddHours(7);
        _context.Credentials.Add(credential);
        _context.SaveChanges();
    }
}