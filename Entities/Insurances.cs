using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Insurances : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public int category_id { get; set; } = 1;
    public string name { get; set; } = "";
    public string price { get; set; }
    public string thumbnail { get; set; } = "";
    public string description { get; set; } = "";
    public InsuranceStatus status { get; set; } = InsuranceStatus.INACTIVE;
}