using myProject.Dtos.Products;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IProductService
{
    IEnumerable<Products> GetAll();
    IEnumerable<Products> GetAllByStatus(ProductStatus status);
    Products GetById(int id);
    ProductResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateProductRequest model);
    void Delete(int id);
    void Create(CreateProductRequest model);
}