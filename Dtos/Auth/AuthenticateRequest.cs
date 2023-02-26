using System.ComponentModel.DataAnnotations;

namespace myProject.Dtos.Auth;

public class AuthenticateRequest
{
    [Required]
    public string username { get; set; }

    [Required]
    public string password { get; set; }
}