using System.ComponentModel.DataAnnotations;
using myProject.Utils.Enums;

namespace myProject.Dtos.User;

public class CreateRequest
{
    public string avatar { get; set; } = "";
    public string firstName { get; set; } = "";
    public string lastName { get; set; } = "";
    [Required]
    public string username { get; set; }
    public string email { get; set; } = "";
    public string phoneNumber { get; set; } = "";
    public string birthday { get; set; }
    public string gender { get; set; } = "";
    public string address { get; set; }  = "";
    [Required]
    [EnumDataType(typeof(UserStatus))]
    public string status { get; set; }  = "";
    [Required]
    [EnumDataType(typeof(Role))]
    public string role { get; set; } = "User";
    [Required]
    [MinLength(6)]
    public string password { get; set; }
    [Required]
    [Compare("password")]
    public string confirmPassword { get; set; }
}