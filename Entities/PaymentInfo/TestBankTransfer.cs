using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Utils.Enums;

namespace myProject.Entities.PaymentInfo;

public class TestBankTransfer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string phoneNumber { get; set; } 
    public string nameOfCard { get; set; } 
    public string numberOfCard { get; set; } 
    public DateTime startDate { get; set; } = DateTime.Parse("2023-01-01");
    public DateTime endDate { get; set; } = DateTime.Parse("2025-01-01");
}