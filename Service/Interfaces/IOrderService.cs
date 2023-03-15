using myProject.Dtos.Order;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IOrderService
{
    IEnumerable<Orders> GetAll();
    IEnumerable<Orders> GetAllByStatus(Enums.OrderStatus status);
    Orders GetById(int id);
    OrderResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateOrderRequest model);
    void Edit(int id, EditOrderRequest model);
    void Delete(int id);
    void Create(CreateOrderRequest model);
}