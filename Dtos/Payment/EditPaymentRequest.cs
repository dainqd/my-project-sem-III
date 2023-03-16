
namespace myProject.Dtos.Payment;

public class EditPaymentRequest
{
    public string paymentCode { get; set; }
    public float totalPrice { get; set; } 
    public DateTimeOffset dateTime { get; set; } = DateTimeOffset.Now;
    public string paymentMethods { get; set; }
    public string description { get; set; } = "";
}