using myProject.Utils.Enums;

namespace myProject.Dtos.Auth;

public class AuthenticateResponse
{
    public int id { get; set; }
    public string username { get; set; }
    public Enums.Role role { get; set; }
    public string token { get; set; }
}