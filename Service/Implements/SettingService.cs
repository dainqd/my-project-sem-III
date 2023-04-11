using AutoMapper;
using myProject._mail_config;
using myProject._mail_config.Interface;
using myProject._mail_config.Template;
using myProject.Config;
using myProject.Context;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class SettingService : ISettingService
{
    private MySQLDBContext _context;
    private IEmailSender _emailSender;
    private readonly IMapper _mapper;

    public SettingService(
        MySQLDBContext context,
        IEmailSender emailSender,
        IMapper mapper)
    {
        _context = context;
        _emailSender = emailSender;
        _mapper = mapper;
    }
    
    public void changeEmail(int id, string email)
    {
        var user = _context.User.Find(id);

        if (user == null || user.status != Enums.UserStatus.ACTIVE)
        {
            throw new AppException("Account not found!");
        }

        if (email == null)
        {
            throw new AppException("Email invalid!");
        }

        if (_context.User.Any(x => x.email == email))
        {
            throw new AppException("User with the email '" + email + "' already exists");   
        }
        
        // generate verify code
        ProjectUtils projectUtils = new ProjectUtils();
        var code = projectUtils.generateCode();
        user.verifyCode = code;
        // send code to email
        var content = ChangeEmail.body;
        content = content.Replace("my_email_replace", email);
        content = content.Replace("my_code_replace", code);
        var message = new Message(new string[] { email }, Constants.EMAIL_CHANGE, content);
        _emailSender.SendEmail(message);
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.User.Update(user);
        // save notification
        Notification notification = new Notification();
        notification.user_id = user.id;
        notification.status = Enums.NotifyStatus.UNSEEN;
        notification.content = "Change email account successful!";
        _context.Notifications.Add(notification);
        _context.SaveChanges();
    }
    
    public void changeEmailVerify(int id, string email, string code)
    {
        var user = _context.User.Find(id);

        if (user == null || user.status != Enums.UserStatus.ACTIVE)
        {
            throw new AppException("Account not found!");
        }

        if (code == null)
        {
            throw new AppException("Code invalid!");
        }

        if (user.verifyCode != code)
        {
            throw new AppException("Code incorrect!");
        }

        user.email = email;
        user.verifyCode = "";
        user.isVerify = true;
        
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.User.Update(user);
        _context.SaveChanges();
    }


    public void changeUsername(int id, string username)
    {
        var user = _context.User.Find(id);

        if (user == null || user.status != Enums.UserStatus.ACTIVE)
        {
            throw new AppException("Account not found!");
        }

        if (username == null)
        {
            throw new AppException("Username invalid!");
        }

        if (_context.User.Any(x => x.username == username))
        {
            throw new AppException("User with the username '" + username + "' already exists");   
        }

        user.username = username;
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.User.Update(user);
        // save notification
        Notification notification = new Notification();
        notification.user_id = user.id;
        notification.status = Enums.NotifyStatus.UNSEEN;
        notification.content = "Change email account successful!";
        _context.Notifications.Add(notification);
        _context.SaveChanges();
    }

    public void changeStatus(int id, Enums.UserStatus status)
    {
        var user = _context.User.Find(id);

        if (user == null || user.status != Enums.UserStatus.ACTIVE)
        {
            throw new AppException("Account not found!");
        }

        user.status = status;
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.User.Update(user);
        // save notification
        Notification notification = new Notification();
        notification.user_id = user.id;
        notification.status = Enums.NotifyStatus.UNSEEN;
        notification.content = "Change status account successful!";
        _context.Notifications.Add(notification);
        _context.SaveChanges();
    }
}