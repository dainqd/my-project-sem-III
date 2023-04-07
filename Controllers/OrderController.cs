using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Order;
using myProject.Entities;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/orders")]
[Authorize]
[ApiController]
public class OrderController : ControllerBase
{
    private IOrderService _orderService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public OrderController(
        IOrderService orderService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _orderService = orderService;
        _mapper = mapper;
    }

    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var order = _orderService.GetByIdAndStatus(id);
        return Ok(order);
    }
    
    [HttpPost]
    public Orders Create(CreateOrderRequest model)
    {
        return _orderService.Create(model);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateOrderRequest model)
    {
        _orderService.Update(id, model);
        return Ok(new { message = "Order updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _orderService.Delete(id);
        return Ok(new { message = "Order deleted" });
    }
}