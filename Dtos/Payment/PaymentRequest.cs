using myProject.Utils.Enums;

namespace myProject.Dtos.Payment;

public class PaymentRequest
{
    public string phoneNumber { get; set; } 
    public string nameOfCard { get; set; } 
    public string numberOfCard { get; set; } 
}