using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[Route("api/insurances")]
[ApiController]
public class InsuranceController : ControllerBase
{
    private IInsuranceService _insuranceService;
    private ICategoryService _categoryService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public InsuranceController(
        IInsuranceService insuranceService,
        ICategoryService categoryService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _insuranceService = insuranceService;
        _categoryService = categoryService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var insurances = _insuranceService.GetAllByStatus(InsuranceStatus.ACTIVE);
        return Ok(insurances);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var insurance = _insuranceService.GetByIdAndStatus(id);
        return Ok(insurance);
    }
}