using System.ComponentModel.DataAnnotations;

namespace myProject.Dtos.Auth;

public class RegisterRequest
{
    [Required]
    public string username { get; set; }
    [Required]
    public string email { get; set; }
    [Required]
    public string password { get; set; }
    [Required]
    [Compare("password")]
    public string confirmPassword { get; set; }
}