using System.ComponentModel.DataAnnotations;
using myProject.Entities.Basic;

namespace myProject.Entities.Location;

public class Location : BaseEntity
{
    [Key]
    public int Id { get; set; }
    [Required]
    public int CityId { get; set; }
    
    public virtual  City City { get; set; }
    
    [Required]
    public string LocationName { get; set; }
    [Required]
    public string LocationCode { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}