using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[ApiController]
[Authorize]
[Route("api/settings")]
public class SettingController : ControllerBase
{
    private ISettingService _settingService;
    private IMapper _mapper;

    public SettingController(
        ISettingService settingService,
        IMapper mapper)
    {
        _settingService = settingService;
        _mapper = mapper;
    }
    
    [HttpPost("change-email/{id}")]
    public IActionResult ChangeEmail(int id, string email)
    {
       _settingService.changeEmail(id, email);
        return Ok();
    }
    
    [HttpPost("change-email-verify/{id}")]
    public IActionResult ChangeEmailVerify(int id, string email, string code)
    { 
        _settingService.changeEmailVerify(id, email, code);
        return Ok();
    } 
    
    [HttpPost("change-username/{id}")]
    public IActionResult ChangeUsername(int id, string username)
    {
        _settingService.changeUsername(id, username);
        return Ok();
    }
    
    [HttpPost("change-status/{id}")]
    public IActionResult ChangeStatus(int id, Enums.UserStatus status)
    {
        _settingService.changeStatus(id, status);
        return Ok();
    } 
}