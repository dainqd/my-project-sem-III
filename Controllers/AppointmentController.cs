using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Appointment;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/appointments")]
[ApiController]
public class AppointmentController : ControllerBase
{
    private IAppointmentService _appointmentService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AppointmentController(
        IAppointmentService appointmentService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _appointmentService = appointmentService;
        _mapper = mapper;
    }
    
    [HttpPost]
    public IActionResult Create(CreateAppointmentRequest model)
    {
        _appointmentService.Create(model);
        return Ok(new { message = "Appointment created" });
    }
}