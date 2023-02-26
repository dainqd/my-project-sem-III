using myProject.Entities;

namespace myProject.Authorization;

public interface IJwtUtils
{
    public string GenerateToken(User user);
    public int? ValidateToken(string? token);
}