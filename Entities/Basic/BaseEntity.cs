namespace myProject.Entities.Basic;

public class BaseEntity
{
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.Now.AddHours(7);
    public System.Nullable<int> CreatedBy { get; set; } 
    public System.Nullable<DateTimeOffset> UpdatedAt { get; set; } 
    public  System.Nullable<int>  UpdatedBy { get; set; }
    public System.Nullable<DateTimeOffset> DeletedAt { get; set; } 
    public System.Nullable<int> DeletedBy { get; set; } 
}