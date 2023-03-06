using myProject.Dtos.Auth;
using myProject.Dtos.Customer;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface ICustomerService
{
    IEnumerable<Customers> GetAll();
    IEnumerable<Customers> GetAllByStatus(CustomerStatus status);
    Customers GetById(int id);
    CustomerResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateCustomerRequest model);
    void Delete(int id);
    void Create(CreateCustomerRequest model);
}