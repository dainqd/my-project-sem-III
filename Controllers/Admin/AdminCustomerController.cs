using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Customer;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[Route("api/admin/customers")]
[Authorize]
[ApiController]
public class AdminCustomerController : ControllerBase
{
    private ICustomerService _customerService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminCustomerController(
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
        var customers = _customerService.GetAll();
        return Ok(customers);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var customer = _customerService.GetById(id);
        return Ok(customer);
    }
    
    [HttpPost]
    public IActionResult Create(CreateCustomerRequest model)
    {
        _customerService.Create(model);
        return Ok(new { message = "Customer created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateCustomerRequest model)
    {
        _customerService.Update(id, model);
        return Ok(new { message = "Customer updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _customerService.Delete(id);
        return Ok(new { message = "Customer deleted" });
    }
}