using myProject.Utils.Enums;

namespace myProject.Dtos.Member;

public class CreateMemberRequest
{
    public string avatar { get; set; }
    public string fullName { get; set; } 
    public string position { get; set; }    
    public string email { get; set; }
    public string phoneNumber { get; set; } 
    public string birthday { get; set; } 
    public string gender { get; set; }
    public string introduce { get; set; } 
    public string description { get; set; } 
    public Enums.MemberStatus status;
}