using myProject.Dtos.Auth;

namespace myProject.Service.Interfaces;

public interface IAuthService
{
    AuthenticateResponse Authenticate(AuthenticateRequest model);
    void Register(RegisterRequest model);
    void VerifyUser(RegisterRequest model);
    void VerifyChangePassForgot(RegisterRequest model);
    void ForgotPassword(RegisterRequest model);
}