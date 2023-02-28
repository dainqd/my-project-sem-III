using System.ComponentModel.DataAnnotations;

namespace myProject.Dtos.Auth;

public class RegisterRequest
{
    public string username { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    [Compare("password")]
    public string confirmPassword { get; set; }
    public string code { get; set; }
}