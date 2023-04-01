using AutoMapper;
using myProject.Context;
using myProject.Dtos.User;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class FindUserService : IFindUserService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public FindUserService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public UserResponse GetByEmail(string email)
    {
        var user = _context.User.SingleOrDefault(x => x.email == email);
        if (user == null || user.status == Enums.UserStatus.DELETED) 
            throw new KeyNotFoundException("User not found");
        
        var response = _mapper.Map<UserResponse>(user);
        return response;
    }

    public UserResponse GetByUsername(string username)
    {
        var user = _context.User.SingleOrDefault(x => x.username == username);
        if (user == null || user.status == Enums.UserStatus.DELETED) 
            throw new KeyNotFoundException("User not found");
        
        var response = _mapper.Map<UserResponse>(user);
        return response;
    }
}