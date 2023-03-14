using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Feedback;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/feedbacks")]
[ApiController]
public class FeedbackController : ControllerBase
{
    private IFeedbackService _feedbackService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public FeedbackController(
        IFeedbackService feedbackService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _feedbackService = feedbackService;
        _mapper = mapper;
    }
    
    [HttpPost]
    public IActionResult Create(CreateFeedbackRequest model)
    {
        _feedbackService.Create(model);
        return Ok(new { message = "Feedback created" });
    }
}