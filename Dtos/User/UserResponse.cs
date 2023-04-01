using System.ComponentModel.DataAnnotations;
using myProject.Utils.Enums;

namespace myProject.Dtos.User;

public class UserResponse
{
    public string avatar { get; set; } 
    public string firstName { get; set; } 
    public string lastName { get; set; } 
    public string username { get; set; }
    public string email { get; set; }
    public string phoneNumber { get; set; }
    public string birthday { get; set; } 
    public string gender { get; set; }
    public string address { get; set; } 
    public Enums.Role role { get; set; }
}