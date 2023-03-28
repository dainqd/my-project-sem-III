using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Member;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/members")]
[Authorize]
[ApiController]
public class AdminMemberController : ControllerBase
{
    private IMemberService _memberService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminMemberController(
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
        var members = _memberService.GetAll();
        return Ok(members);
    }
    
    [HttpGet("list/{status}")]
    public IActionResult? GetAllByStatus(Enums.MemberStatus status)
    {
        var member = _memberService.GetAllByStatus(status);
        return Ok(member);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var member = _memberService.GetById(id);
        return Ok(member);
    }
    
    [HttpPost]
    public IActionResult Create(CreateMemberRequest model)
    {
        _memberService.Create(model);
        return Ok(new { message = "Member created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateMemberRequest model)
    {
        _memberService.Update(id, model);
        return Ok(new { message = "Member updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _memberService.Delete(id);
        return Ok(new { message = "Member deleted" });
    }
}