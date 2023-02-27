namespace myProject._mail_config.Interface;

public interface IEmailSender
{
    void SendEmail(Message message);
}