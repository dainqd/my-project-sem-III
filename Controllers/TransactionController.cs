using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[ApiController]
// [Authorize]
[Route("api/transactions")]
public class TransactionController : ControllerBase
{
    private ITransactionService _transactionService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public TransactionController(
        ITransactionService transactionService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _transactionService = transactionService;
        _mapper = mapper;
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var transaction = _transactionService.GetByIdAndStatus(id);
        return Ok(transaction);
    }
    
    [HttpGet("list/{id}")]
    public IActionResult? GetByUserId(int id)
    {
        var transactions = _transactionService.GetAllByUserID(id);
        return Ok(transactions);
    }
}