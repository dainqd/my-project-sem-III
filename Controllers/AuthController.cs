using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Auth;
using myProject.Service.Implements;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private IAuthService _authService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AuthController(
        IAuthService authService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _authService = authService;
        _mapper = mapper;
    }
    
    [AllowAnonymous]
    [HttpPost("login")]
    public IActionResult Authenticate(AuthenticateRequest model)
    {
        var response = _authService.Authenticate(model);
        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register(RegisterRequest model)
    {
        _authService.Register(model);
        return Ok(new { message = "Registration successful" });
    }
    
    [AllowAnonymous]
    [HttpPost("verify-register")]
    public IActionResult VerifyRegister(RegisterRequest model)
    {
        _authService.VerifyUser(model);
        return Ok(new { message = "Verify successful! Account was actived" });
    }
    
    [AllowAnonymous]
    [HttpPost("forgot-password")]
    public IActionResult ForgotPassword(RegisterRequest model)
    {
        _authService.ForgotPassword(model);
        return Ok(new { message = "You must verify the account forgot password to update the new password" });
    }
    
    [AllowAnonymous]
    [HttpPost("verify-forgot-password")]
    public IActionResult VerifyChangePassForgot(RegisterRequest model)
    {
        _authService.VerifyChangePassForgot(model);
        return Ok(new { message = "Change password forgot successful, " });
    }
}