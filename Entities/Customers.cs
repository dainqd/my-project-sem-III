using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Customers : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string avatar { get; set; } = "";
    public int user_id { get; set; }
    public string fullName { get; set; } = "";
    public string email { get; set; } = "";
    public string phoneNumber { get; set; } = "";
    public string address { get; set; } = "";
    public CustomerStatus status { get; set; } = CustomerStatus.INACTIVE;
}