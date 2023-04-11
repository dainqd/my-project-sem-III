using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/credential")]
[Authorize]
[ApiController]
public class CredentialController : ControllerBase
{
    private ICredentialService _credentialService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public CredentialController(
        ICredentialService credentialService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _credentialService = credentialService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var credentials = _credentialService.GetAll();
        return Ok(credentials);
    }
    
    [HttpGet("list/{id}")]
    public IActionResult? GetAllById(int id)
    {
        var credentials = _credentialService.GetAllById(id);
        return Ok(credentials);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var credential = _credentialService.GetById(id);
        return Ok(credential);
    }
}