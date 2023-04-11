using myProject.Entities;

namespace myProject.Service.Interfaces;

public interface ICredentialService
{
    IEnumerable<Credential> GetAll();
    IEnumerable<Credential> GetAllById(int id);
    Credential GetById(int id);
    void Delete(int id);
}