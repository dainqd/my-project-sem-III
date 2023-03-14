using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Payment : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string totalPrice { get; set; } = "";
    public DateTimeOffset dateTime { get; set; } = DateTimeOffset.Now.AddHours(7);
    public string paymentMethods { get; set; } = "";
    public string description { get; set; } = "";
    public Enums.PaymentStatus status { get; set; } = Enums.PaymentStatus.UNPAID;
}