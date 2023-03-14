using myProject.Dtos.Feedback;
using myProject.Dtos.Insurances;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IFeedbackService
{
    IEnumerable<Feedbacks> GetAll();
    IEnumerable<Feedbacks> GetAllByStatus(Enums.FeedbackStatus status);
    Feedbacks GetById(int id);
    void Update(int id, Enums.FeedbackStatus status);
    void Delete(int id);
    void Create(CreateFeedbackRequest model); 
}