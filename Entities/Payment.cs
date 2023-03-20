using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Payment : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string paymentCode { get; set; }
    public int order_id { get; set; }
    public float totalPrice { get; set; } 
    public DateTimeOffset dateTime { get; set; } = DateTimeOffset.Now.AddHours(7);
    public Enums.PaymentMethod paymentMethods { get; set; } = Enums.PaymentMethod.PAY_DIRECT;
    public string description { get; set; } = "";
    public Enums.PaymentStatus status { get; set; } = Enums.PaymentStatus.UNPAID;
}