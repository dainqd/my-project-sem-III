using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Appointment;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class AppointmentService : IAppointmentService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public AppointmentService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Appointments> GetAll()
    {
        return _context.Appointments;
    }

    public IEnumerable<Appointments> GetAllByStatus(Enums.AppointmentStatus status)
    {
        var newstatus = status;
        if (newstatus == null || status == Enums.AppointmentStatus.DELETED)
        {
            newstatus = Enums.AppointmentStatus.ACTIVE;
        }
        return _context.Appointments.Where(v => v.status == newstatus).ToList();
    }

    public Appointments GetById(int id)
    {
        return getAppointment(id);
    }

    public void Update(int id, Enums.AppointmentStatus status)
    {
        var newstatus = status;
        if (newstatus == null || status == Enums.AppointmentStatus.DELETED)
        {
            newstatus = Enums.AppointmentStatus.ACTIVE;
        }
        
        var appointment = getAppointment(id);
        appointment.status = newstatus;
        appointment.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.Appointments.Update(appointment);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var appointment = getAppointment(id);
        appointment.status = Enums.AppointmentStatus.DELETED;
        appointment.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Appointments.Update(appointment);
        _context.SaveChanges();
    }

    public void Create(CreateAppointmentRequest model)
    {
        var appointment  = _mapper.Map<Appointments>(model);

        if (model.fullname == null)
        {
            throw new AppException("Name invalid!");
        }
        
        if (model.email == null)
        {
            throw new AppException("Email invalid!");
        }
        
        if (model.phone == null)
        {
            throw new AppException("Phone invalid!");
        }
        
        appointment.CreatedAt = DateTimeOffset.Now.AddHours(7);

        _context.Appointments.Add(appointment);
        _context.SaveChanges();
    }

    private Appointments getAppointment(int id)
    {
        var appointment = _context.Appointments.Find(id);
        if (appointment == null || appointment.status == Enums.AppointmentStatus.DELETED)
        {
            throw new KeyNotFoundException("Appointment not found");
        }
        return appointment;
    }
}