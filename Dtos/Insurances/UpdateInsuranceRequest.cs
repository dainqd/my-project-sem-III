using myProject.Utils.Enums;

namespace myProject.Dtos.Insurances;

public class UpdateInsuranceRequest
{
    public int user_id { get; set; } 
    public int category_id { get; set; } 
    public string name { get; set; } = "";
    public string price { get; set; }
    public string thumbnail { get; set; } = "";
    public string description { get; set; } = "";
    public InsuranceStatus status { get; set; } = InsuranceStatus.INACTIVE;
}