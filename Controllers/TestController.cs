using Microsoft.AspNetCore.Mvc;
using myProject._mail_config;
using myProject._mail_config.Interface;
using NETCore.MailKit.Core;

namespace myProject.Controllers;

[ApiController]
[Route("test")]
public class TestController : ControllerBase
{
    private IEmailSender _emailSender;
    
    public TestController(
        IEmailSender emailService)
    {
        _emailSender = emailService;
    }
    
    [HttpGet("sendMail")]
    public IActionResult? sendMail()
    {
        var rng = new Random();
        var message = new Message(new string[] { "giriga1436@youke1.com" }, "Test email", "This is the content from our email.");
        _emailSender.SendEmail(message);
        return Ok("Send ok");
    }
}
