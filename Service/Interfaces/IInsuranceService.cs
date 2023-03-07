using myProject.Dtos.Insurances;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IInsuranceService
{
    IEnumerable<Insurances> GetAll();
    IEnumerable<Insurances> GetAllByStatus(Enums.InsuranceStatus status);
    Insurances GetById(int id);
    InsuranceResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateInsuranceRequest model);
    void Delete(int id);
    void Create(CreateInsuranceRequest model);
}