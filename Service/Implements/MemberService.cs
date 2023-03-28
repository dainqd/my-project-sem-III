using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Member;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class MemberService : IMemberService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;

    public MemberService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;

    }
    
    public IEnumerable<Members> GetAll()
    {
        return _context.Members;
    }

    public IEnumerable<Members> GetAllByStatus(Enums.MemberStatus status)
    {
        var newstatus = status;
        if (newstatus == null || status == Enums.MemberStatus.DELETED)
        {
            newstatus = Enums.MemberStatus.ACTIVE;
        }
        return _context.Members.Where(v => v.status == newstatus).ToList();
    }

    public Members GetById(int id)
    {
        return getMemberById(id);
    }

    public MemberResponse GetByIdAndStatus(int id)
    {
        return getMemberByIdAndStatus(id);
    }

    public void Update(int id, UpdateMemberRequest model)
    {
        var member = getMemberById(id);
        
        if(model.email == null)
            throw new AppException("Email invalid!");
        member.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _mapper.Map(model, member);

        _context.Members.Update(member);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var member = getMemberById(id);
        member.status = Enums.MemberStatus.DELETED;
        member.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Members.Update(member);
        _context.SaveChanges();
    }

    public void Create(CreateMemberRequest model)
    {
        var member = _mapper.Map<Members>(model);
        
        if (model.email == null)
        {
            throw new AppException("Email invalid!");
        }
        
        member.CreatedAt = DateTimeOffset.Now.AddHours(7);
        _mapper.Map(model, member);
        _context.Members.Add(member);
        _context.SaveChanges();
    }
    
    private Members getMemberById(int id)
    {
        var member = _context.Members.Find(id);
        if (member == null || member.status == Enums.MemberStatus.DELETED)
        {
            throw new KeyNotFoundException("Member not found");   
        }
        
        return member;
    }
    
    private MemberResponse getMemberByIdAndStatus(int id)
    {
        var member = _context.Members.Find(id);
        if (member == null || member.status != Enums.MemberStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Member not found");   
        }

        var response = _mapper.Map<MemberResponse>(member);
        return response;
    }
}