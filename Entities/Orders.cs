using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Orders : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string orderCode { get; set; } = "";
    public string name { get; set; } = "";
    public string phoneNumber { get; set; } = "";
    public string totalMoney { get; set; } = "";
    public int customer_id { get; set; } 
    public int insurance_id { get; set; } 
    public int payment_id { get; set; } 
    public Enums.OrderStatus status { get; set; } = Enums.OrderStatus.PREPARING;
}