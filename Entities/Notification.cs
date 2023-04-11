using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Notification : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public int user_id { get; set; }
    public string content { get; set; }
    public string description { get; set; } = "";
    public Enums.NotifyStatus status { get; set; } = Enums.NotifyStatus.UNSEEN;
}