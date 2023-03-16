
namespace myProject.Dtos.Payment;

public class UpdatePaymentRequest
{
    public float totalPrice { get; set; }
    public string paymentMethods { get; set; }
    public string description { get; set; } = "";
}