using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/notification")]
[Authorize]
[ApiController]
public class NotificationController : ControllerBase
{
    private INotificationService _notificationService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public NotificationController(
        INotificationService notificationService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _notificationService = notificationService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var notifications = _notificationService.GetAll();
        return Ok(notifications);
    }
    
    [HttpGet("list/{id}")]
    public IActionResult? GetAllById(int id)
    {
        var notifications = _notificationService.GetAllById(id);
        return Ok(notifications);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var notification = _notificationService.GetById(id);
        return Ok(notification);
    }
    
    [HttpDelete("/{id}")]
    public IActionResult? Delete(int id)
    {
        _notificationService.Delete(id);
        return Ok(new { message = "Delete success" });
    }
}