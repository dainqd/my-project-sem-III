using myProject.Utils.Enums;

namespace myProject.Dtos.Order;

public class CreateOrderRequest
{
    public string orderCode { get; set; }
    public string name { get; set; } 
    public string phoneNumber { get; set; } 
    public string totalMoney { get; set; } 
    public string address { get; set; }
    public int customer_id { get; set; } 
    public int insurance_id { get; set; } 
    public int payment_id { get; set; } 
    public Enums.OrderStatus status { get; set; } = Enums.OrderStatus.PREPARING;
}