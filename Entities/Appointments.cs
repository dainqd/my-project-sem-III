using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Appointments : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string fullname { get; set; }
    public int insurance_id { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public Enums.AppointmentStatus status { get; set; } =  Enums.AppointmentStatus.ACTIVE;
}