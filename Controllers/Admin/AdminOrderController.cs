using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Order;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/orders")]
[Authorize]
[ApiController]
public class AdminOrderController : ControllerBase
{
    private IOrderService _orderService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminOrderController(
        IOrderService orderService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _orderService = orderService;
        _mapper = mapper;
    }
    
     
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var orders = _orderService.GetAll();
        return Ok(orders);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult? GetAll(Enums.OrderStatus status)
    {
        var orders = _orderService.GetAllByStatus(status);
        return Ok(orders);
    }

    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var order = _orderService.GetById(id);
        return Ok(order);
    }
    
    [HttpPost]
    public IActionResult Create(CreateOrderRequest model)
    {
        _orderService.Create(model);
        return Ok(new { message = "Order created" });
    }

    [HttpPut("{id}")]
    public IActionResult Edit(int id, EditOrderRequest model)
    {
        _orderService.Edit(id, model);
        return Ok(new { message = "Order edited" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _orderService.Delete(id);
        return Ok(new { message = "Order deleted" });
    }
}