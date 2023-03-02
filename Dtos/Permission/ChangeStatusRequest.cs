using System.ComponentModel.DataAnnotations;
using myProject.Utils.Enums;

namespace myProject.Dtos.Permission;

public class ChangeStatusRequest
{
    [Required]
    [EnumDataType(typeof(UserStatus))]
    public string status { get; set; } 
    [Required]
    [MinLength(6)]
    public string password { get; set; }
}