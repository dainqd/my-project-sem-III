using myProject.Dtos.Appointment;
using myProject.Dtos.Feedback;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IAppointmentService
{
    IEnumerable<Appointments> GetAll();
    IEnumerable<Appointments> GetAllByStatus(Enums.AppointmentStatus status);
    Appointments GetById(int id);
    void Update(int id, Enums.AppointmentStatus status);
    void Delete(int id);
    void Create(CreateAppointmentRequest model); 
}