using myProject.Entities;

namespace myProject.Authorization.Interfaces;

public interface IJwtUtils
{
    public string GenerateToken(User user);
    public int? ValidateToken(string? token);
}