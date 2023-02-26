using System.ComponentModel.DataAnnotations;

namespace myProject.Dtos.User;

public class ChangePasswordRequest
{
    private string _oldpassword;
    [MinLength(6)]
    public string oldPassword
    {
        get => _oldpassword;
        set => _oldpassword = replaceEmptyWithNull(value);
    }
    
    private string _password;
    [MinLength(6)]
    public string password
    {
        get => _password;
        set => _password = replaceEmptyWithNull(value);
    }

    private string _confirmPassword;
    [Compare("password")]
    public string confirmPassword 
    {
        get => _confirmPassword;
        set => _confirmPassword = replaceEmptyWithNull(value);
    }

    // helpers

    private string replaceEmptyWithNull(string value)
    {
        // replace empty string with null to make field optional
        return string.IsNullOrEmpty(value) ? null : value;
    }
}