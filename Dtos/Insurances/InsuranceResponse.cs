namespace myProject.Dtos.Insurances;

public class InsuranceResponse
{
    public int id { get; set; }
    public int category_id { get; set; } = 1;
    public int user_id { get; set; }
    public string name { get; set; } = "";
    public string price { get; set; }
    public string thumbnail { get; set; } = "";
    public string description { get; set; } = "";
    public string status { get; set; }
}