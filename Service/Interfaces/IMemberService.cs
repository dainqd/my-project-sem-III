using myProject.Dtos.Member;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IMemberService
{
    IEnumerable<Members> GetAll();
    IEnumerable<Members> GetAllByStatus(Enums.MemberStatus status);
    Members GetById(int id);
    MemberResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateMemberRequest model);
    void Delete(int id);
    void Create(CreateMemberRequest model);
}