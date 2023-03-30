﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using myProject.Entities.Basic;
using myProject.Utils.Enums;

namespace myProject.Entities;

public class Feedbacks : BaseEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id { get; set; }
    public string fullname { get; set; }
    public string message { get; set; }
    public string email { get; set; }
    public Enums.FeedbackStatus status { get; set; } =  Enums.FeedbackStatus.PENDING;
}