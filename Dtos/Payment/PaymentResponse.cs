using myProject.Utils.Enums;

namespace myProject.Dtos.Payment;

public class PaymentResponse
{
    public int id { get; set; }
    public string paymentCode { get; set; }
    public float totalPrice { get; set; } 
    public DateTimeOffset dateTime { get; set; } 
    public string paymentMethods { get; set; } 
    public string description { get; set; } 
    public Enums.PaymentStatus status { get; set; }
}