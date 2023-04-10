using myProject.Utils.Enums;

namespace myProject.Dtos.Transaction;

public class CreateTransactionRequest
{
    public int customer_id { get; set; }
    public DateTimeOffset dateTime { get; set; } = DateTimeOffset.Now.AddHours(7);
    public int insurance_id { get; set; }
    public int payment_id { get; set; }
    public string total_money { get; set; }
    public string description { get; set; } = "";
    public Enums.TransactionStatus status { get; set; } = Enums.TransactionStatus.FAIL;
}