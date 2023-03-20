using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Insurances;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/insurances")]
[Authorize]
[ApiController]
public class AdminInsuranceController : ControllerBase
{
    private IInsuranceService _insuranceService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminInsuranceController(
        IInsuranceService insuranceService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _insuranceService = insuranceService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var insurances = _insuranceService.GetAll();
        return Ok(insurances);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult GetAllByStatus(Enums.InsuranceStatus status)
    {
        var insurances = _insuranceService.GetAllByStatus(status);
        return Ok(insurances);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var insurance = _insuranceService.GetById(id);
        return Ok(insurance);
    }
    
    [HttpPost]
    public IActionResult Create(CreateInsuranceRequest model)
    {
        _insuranceService.Create(model);
        return Ok(new { message = "Insurance created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateInsuranceRequest model)
    {
        _insuranceService.Update(id, model);
        return Ok(new { message = "Insurance updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _insuranceService.Delete(id);
        return Ok(new { message = "Insurance deleted" });
    }
}