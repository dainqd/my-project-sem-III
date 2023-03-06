using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[Route("api/customers")]
[ApiController]
public class CustomerController : ControllerBase
{
    private ICustomerService _customerService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public CustomerController(
        ICustomerService customerService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _customerService = customerService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var customers = _customerService.GetAllByStatus(CustomerStatus.ACTIVE);
        return Ok(customers);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var customer = _customerService.GetByIdAndStatus(id);
        return Ok(customer);
    }
}