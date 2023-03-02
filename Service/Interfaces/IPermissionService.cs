using myProject.Dtos.Permission;

namespace myProject.Service.Interfaces;

public interface IPermissionService
{
    void ChangeRole(int id, int adminID, ChangeRoleRequest model);
    void ChangeStatus(int id,int adminID, ChangeStatusRequest model);
}