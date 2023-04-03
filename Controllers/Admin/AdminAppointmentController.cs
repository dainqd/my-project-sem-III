using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/appointments")]
[Authorize]
[ApiController]
public class AdminAppointmentController : ControllerBase
{
    private IAppointmentService _appointmentService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminAppointmentController(
        IAppointmentService appointmentService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _appointmentService = appointmentService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var appointments = _appointmentService.GetAll();
        return Ok(appointments);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult? GetAllByStatus(Enums.AppointmentStatus status)
    {
        var appointments = _appointmentService.GetAllByStatus(status);
        return Ok(appointments);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var appointment = _appointmentService.GetById(id);
        return Ok(appointment);
    }
    
    [HttpPut("{id}")]
    public IActionResult Update(int id,  Enums.AppointmentStatus status)
    {
        _appointmentService.Update(id, status);
        return Ok(new { message = "Appointment updated" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _appointmentService.Delete(id);
        return Ok(new { message = "Appointment deleted" });
    }
}