using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Transaction;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[ApiController]
[Authorize]
[Route("admin/api/transactions")]
public class AdminTransactionController : ControllerBase
{
    private ITransactionService _transactionService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminTransactionController(
        ITransactionService transactionService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _transactionService = transactionService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var transactions = _transactionService.GetAll();
        return Ok(transactions);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult GetAllByStatus(Enums.TransactionStatus status)
    {
        var transactions = _transactionService.GetAllByStatus(status);
        return Ok(transactions);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var transaction = _transactionService.GetById(id);
        return Ok(transaction);
    }
    
    [HttpPost]
    public IActionResult Create(CreateTransactionRequest model)
    {
        _transactionService.Create(model);
        return Ok(new { message = "transaction created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateTransactionRequest model)
    {
        _transactionService.Update(id, model);
        return Ok(new { message = "transaction updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _transactionService.Delete(id);
        return Ok(new { message = "transaction deleted" });
    }
}