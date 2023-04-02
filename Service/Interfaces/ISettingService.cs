using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface ISettingService
{
    void changeEmail(int id, string email);
    void changeUsername(int id, string username);
    void changeEmailVerify(int id, string email, string code);
    void changeStatus(int id, Enums.UserStatus status);
}