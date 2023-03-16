namespace myProject.Dtos.Order;

public class UpdateOrderRequest
{
    public string name { get; set; }
    public string phoneNumber { get; set; }
    public float totalMoney { get; set; } 
    public string address { get; set; }
    public int insurance_id { get; set; } 
    public int payment_id { get; set; }
}