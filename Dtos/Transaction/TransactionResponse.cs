using myProject.Utils.Enums;

namespace myProject.Dtos.Transaction;

public class TransactionResponse
{
    public int id { get; set; }
    public int customer_id { get; set; }
    public DateTimeOffset dateTime { get; set; } 
    public int payment_id { get; set; }
    public int insurance_id { get; set; }
    public string total_money { get; set; }
    public string description { get; set; }
    public Enums.TransactionStatus status { get; set; } 
}