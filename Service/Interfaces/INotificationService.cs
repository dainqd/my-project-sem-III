using myProject.Entities;

namespace myProject.Service.Interfaces;

public interface INotificationService
{
    IEnumerable<Notification> GetAll();
    IEnumerable<Notification> GetAllById(int id);
    Notification GetById(int id);
    void Delete(int id);
}