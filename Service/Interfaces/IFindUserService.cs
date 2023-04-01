using myProject.Dtos.User;

namespace myProject.Service.Interfaces;

public interface IFindUserService
{
    UserResponse GetByEmail(string email);
    UserResponse GetByUsername(string username);
}