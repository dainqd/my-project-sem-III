using myProject.Utils.Enums;

namespace myProject.Dtos.Customer;

public class CreateCustomerRequest
{
    public string avatar { get; set; } = "";
    public int user_id { get; set; }
    public string fullName { get; set; } = "";
    public string email { get; set; }
    public string phoneNumber { get; set; } = "";
    public string address { get; set; } = "";
    public CustomerStatus status { get; set; } = CustomerStatus.INACTIVE;
}