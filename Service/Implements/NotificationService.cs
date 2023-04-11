using AutoMapper;
using myProject.Context;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class NotificationService : INotificationService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;

    public NotificationService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;

    }

    public IEnumerable<Notification> GetAll()
    {
        return _context.Notifications;
    }

    public IEnumerable<Notification> GetAllById(int id)
    {
        return _context.Notifications.Where(n => n.user_id == id).ToList();
    }

    public Notification GetById(int id)
    {
        return getNotification(id);
    }

    public void Delete(int id)
    {
        var notification = getNotification(id);
        notification.status = Enums.NotifyStatus.DELETED;
        notification.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Notifications.Update(notification);
        _context.SaveChanges();
    }
    
    private Notification getNotification(int id)
    {
        var notification = _context.Notifications.Find(id);
        if (notification == null)
        {
            throw new KeyNotFoundException("Notification not found");
        }
        return notification;
    }
}