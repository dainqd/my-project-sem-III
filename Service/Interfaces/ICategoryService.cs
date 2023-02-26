using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface ICategoryService
{
    IEnumerable<Categories> GetAll();
    Categories GetById(int id);
    void Update(int id, string name, CategoryStatus status);
    void Delete(int id);
    void Create(string name, CategoryStatus status);
}