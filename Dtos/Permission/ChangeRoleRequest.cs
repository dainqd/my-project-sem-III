using System.ComponentModel.DataAnnotations;
using myProject.Utils.Enums;

namespace myProject.Dtos.Permission;

public class ChangeRoleRequest
{
    [Required]
    [EnumDataType(typeof(Role))]
    public string role { get; set; }
    [Required]
    [MinLength(6)]
    public string password { get; set; }
}