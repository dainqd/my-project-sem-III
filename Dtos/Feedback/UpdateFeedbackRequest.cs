using myProject.Utils.Enums;

namespace myProject.Dtos.Feedback;

public class UpdateFeedbackRequest
{
    public string fullname { get; set; }
    public string message { get; set; }
    public string thumbnail { get; set; }
    public Enums.FeedbackStatus status =  Enums.FeedbackStatus.PENDING;
}