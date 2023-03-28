using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[Route("api/members")]
[ApiController]
public class MemberController : ControllerBase
{
    private IMemberService _memberService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public MemberController(
        IMemberService memberService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _memberService = memberService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var members = _memberService.GetAllByStatus(Enums.MemberStatus.ACTIVE);
        return Ok(members);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var member = _memberService.GetByIdAndStatus(id);
        return Ok(member);
    }
}