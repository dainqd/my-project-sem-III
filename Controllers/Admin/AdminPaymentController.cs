using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Payment;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/payment")]
[Authorize]
[ApiController]
public class AdminPaymentController : ControllerBase
{
    private IPaymentService _paymentService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminPaymentController(
        IPaymentService paymentService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _paymentService = paymentService;
        _mapper = mapper;
    }  
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var payments = _paymentService.GetAll();
        return Ok(payments);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult GetAllByStatus(Enums.PaymentStatus status)
    {
        var payments = _paymentService.GetAllByStatus(status);
        return Ok(payments);
    }

    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var payment = _paymentService.GetById(id);
        return Ok(payment);
    }
    
    [HttpPost]
    public IActionResult Create(CreatePaymentRequest model)
    {
        _paymentService.Create(model);
        return Ok(new { message = "Payment created" });
    }
    
    [HttpPost("pay/{id}")]
    public IActionResult Create(int id, PaymentRequest model)
    {
        _paymentService.CheckPayment(id, model);
        return Ok(new { message = "Pay success" });
    }

    [HttpPut("{id}")]
    public IActionResult Edit(int id, EditPaymentRequest model)
    {
        _paymentService.Edit(id, model);
        return Ok(new { message = "Payment edited" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _paymentService.Delete(id);
        return Ok(new { message = "Payment deleted" });
    }
}