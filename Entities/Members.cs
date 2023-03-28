using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Members : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string avatar { get; set; }
    public string fullName { get; set; } 
    // Chuc vu
    public string position { get; set; }    
    public string email { get; set; }
    public string phoneNumber { get; set; }
    public string birthday { get; set; } = "";

    public string gender { get; set; } = "";
    // Gioi thieu
    public string introduce { get; set; } 
    // Mo ta, tom tat
    public string description { get; set; } = "";
    public Enums.MemberStatus status =  Enums.MemberStatus.INACTIVE;
}