using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/find")]
[ApiController]
public class FindController : ControllerBase
{
    private IFindUserService _findUserService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public FindController(
        IFindUserService findUserService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _findUserService = findUserService;
        _mapper = mapper;
    }
    
    [HttpGet("user-by-email/{email}")]
    public IActionResult GetByEmail(string email)
    {
        var user = _findUserService.GetByEmail(email);
        return Ok(user);
    }
    
    [HttpGet("user-by-username/{username}")]
    public IActionResult GetByusername(string username)
    {
        var user = _findUserService.GetByUsername(username);
        return Ok(user);
    }
}