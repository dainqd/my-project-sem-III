using AutoMapper;
using myProject.Context;
using myProject.Dtos.Permission;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class PermissionService : IPermissionService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public PermissionService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public void ChangeRole(int id, int adminId, ChangeRoleRequest model)
    {
        var admin = getUser(adminId);
        if (id == adminId)
        {
            throw new KeyNotFoundException(Constants.account_not_found);
        }
        
        if (admin.role != Enums.Role.ADMIN)
        {
            throw new KeyNotFoundException(Constants.account_not_found);
        }

        if (!BCrypt.Net.BCrypt.Verify(model.password, admin.password))
        {
            throw new KeyNotFoundException(Constants.account_password_incorrect);
        }
        
        var user = getUser(id);
        var newRole = model.role;
        Enums.Role role = (Enums.Role) Enum.Parse(typeof(Enums.Role), newRole);
        user.role = role;
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        user.UpdatedBy = adminId;
        // copy model to user and save
        _mapper.Map(model, user);
        _context.User.Update(user);
        // save credential
        Credential credential = new Credential();
        credential.user_id = user.id;
        credential.active = Constants.CHANGE_ROLE;
        credential.datetime = DateTimeOffset.Now.AddHours(7);
        _context.Credentials.Add(credential);
        _context.SaveChanges();
    }

    public void ChangeStatus(int id, int adminId, ChangeStatusRequest model)
    {
        var admin = getUser(adminId);
        if (admin.role != Enums.Role.ADMIN)
        {
            throw new KeyNotFoundException(Constants.account_not_found);
        }

        if (!BCrypt.Net.BCrypt.Verify(model.password, admin.password))
        {
            throw new KeyNotFoundException(Constants.account_password_incorrect);
        }
        
        var user = getUser(id);
        var newStatus = model.status;
        Enums.UserStatus status = (Enums.UserStatus) Enum.Parse(typeof(Enums.UserStatus), newStatus);
        user.status = status;
        user.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        user.UpdatedBy = adminId;
        // copy model to user and save
        _mapper.Map(model, user);
        _context.User.Update(user);
        // save credential
        Credential credential = new Credential();
        credential.user_id = user.id;
        credential.active = Constants.CHANGE_STATUS;
        credential.datetime = DateTimeOffset.Now.AddHours(7);
        _context.Credentials.Add(credential);
        _context.SaveChanges();
    }
    
    private User getUser(int id)
    {
        var user = _context.User.Find(id);
        if (user == null) 
            throw new KeyNotFoundException(Constants.account_not_found);
        return user;
    }
}