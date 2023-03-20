using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Payment;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/payment")]
[Authorize]
[ApiController]
public class PaymentController : ControllerBase
{
    private IPaymentService _paymentService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public PaymentController(
        IPaymentService paymentService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _paymentService = paymentService;
        _mapper = mapper;
    }  
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var order = _paymentService.GetByIdAndStatus(id);
        return Ok(order);
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
    public IActionResult Update(int id, UpdatePaymentRequest model)
    {
        _paymentService.Update(id, model);
        return Ok(new { message = "Payment updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _paymentService.Delete(id);
        return Ok(new { message = "Payment deleted" });
    }
}