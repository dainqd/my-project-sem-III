using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class User : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string avatar { get; set; } = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg";
    public string firstName { get; set; } = "";
    public string lastName { get; set; } = "";
    [Required]
    public string username { get; set; }
    [Required]
    public string email { get; set; }
    public string phoneNumber { get; set; } = "";
    public string birthday { get; set; } = "";
    public string gender { get; set; } = "";
    public string address { get; set; } = "";
    public string verifyCode { get; set; } = "";
    public bool isVerify { get; set; } = false;
    public UserStatus status { get; set; } = UserStatus.INACTIVE;
    [Required]
    public string password { get; set; }
    public Role role { get; set; } = Role.USER;
}