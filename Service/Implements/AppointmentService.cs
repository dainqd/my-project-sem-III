using AutoMapper;
using myProject._mail_config;
using myProject._mail_config.Interface;
using myProject._mail_config.Template;
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
    private IEmailSender _emailSender;
    
    public AppointmentService(
        MySQLDBContext context,
        IEmailSender emailSender,
        IMapper mapper)
    {
        _context = context;
        _emailSender = emailSender;
        _mapper = mapper;
    }
    
    public IEnumerable<Appointments> GetAll()
    {
        return _context.Appointments.Where(v => v.status != Enums.AppointmentStatus.DELETED).ToList();
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
        
        if (model.insurance_id == null)
        {
            throw new AppException("Insurance invalid!");
        }
        
        if (model.email == null)
        {
            throw new AppException("Email invalid!");
        }
        
        if (model.phone == null)
        {
            throw new AppException("Phone invalid!");
        }

        var insurance = _context.Insurances.Find(model.insurance_id);
        
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new AppException("Insurance not found!");
        }
        
        var content = AppointmentMail.body;
        content = content.Replace("my_email_replace", model.email);
        var message = new Message(new string[] { model.email }, "Thanks you", content);
        _emailSender.SendEmail(message);

        var confirm = ConfirmAppointmentMail.body;
        confirm = confirm.Replace("my_email_replace", "dainqth2109019@fpt.edu.vn");
        confirm = confirm.Replace("my_insurance_replace", insurance.name);
        var mail = new Message(new string[] { "dainqth2109019@fpt.edu.vn" }, "New register", confirm);
        _emailSender.SendEmail(mail);
        
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