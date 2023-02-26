namespace myProject.Dtos.Products;

public class ProductResponse
{
    public int id { get; set; }
    public string name { get; set; }
    public int quantity { get; set; }
    public string price { get; set; }
    public string thubnail { get; set; }
    public string description { get; set; } 
    public string status { get; set; }
    public string category_name { get; set; }
}