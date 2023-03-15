using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;

namespace myProject.Entities.Location;

public class City : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string CityCode { get; set; }
    [Required]
    public int ProvinceId { get; set; }
    
    public virtual Province Province { get; set; }
}