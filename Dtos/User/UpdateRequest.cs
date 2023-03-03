using System.ComponentModel.DataAnnotations;
using myProject.Utils.Enums;

namespace myProject.Dtos.User;

public class UpdateRequest
{
    public string avatar { get; set; } = "";
    public string firstName { get; set; } = "";
    public string lastName { get; set; } = "";
    [Required]
    public string username { get; set; }
    public string phoneNumber { get; set; } = "";
    public string birthday { get; set; } = "";
    public string gender { get; set; } = "";
    public string address { get; set; }  = "";
}