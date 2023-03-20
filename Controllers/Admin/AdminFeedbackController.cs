using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/feedbacks")]
[Authorize]
[ApiController]
public class AdminFeedbackController : ControllerBase
{
    private IFeedbackService _feedbackService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminFeedbackController(
        IFeedbackService feedbackService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _feedbackService = feedbackService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var feedbacks = _feedbackService.GetAll();
        return Ok(feedbacks);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult? GetAllByStatus(Enums.FeedbackStatus status)
    {
        var feedbacks = _feedbackService.GetAllByStatus(status);
        return Ok(feedbacks);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var feedback = _feedbackService.GetById(id);
        return Ok(feedback);
    }
    
    [HttpPut("{id}")]
    public IActionResult Update(int id,  Enums.FeedbackStatus status)
    {
        _feedbackService.Update(id, status);
        return Ok(new { message = "Feedback updated" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _feedbackService.Delete(id);
        return Ok(new { message = "Feedback deleted" });
    }
}