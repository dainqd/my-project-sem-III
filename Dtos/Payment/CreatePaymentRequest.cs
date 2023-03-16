
namespace myProject.Dtos.Payment;

public class CreatePaymentRequest
{
    public string paymentCode { get; set; }
    public float totalPrice { get; set; } 
    public DateTimeOffset dateTime { get; set; } = DateTimeOffset.Now;
    public string paymentMethods { get; set; }
    public string description { get; set; } = "";
}