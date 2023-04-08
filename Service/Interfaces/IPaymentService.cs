using myProject.Dtos.Order;
using myProject.Dtos.Payment;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface IPaymentService
{
    IEnumerable<Payment> GetAll();
    IEnumerable<Payment> GetAllByStatus(Enums.PaymentStatus status);
    IEnumerable<Payment> GetAllByCustomerID(int customerId);
    Payment GetById(int id);
    PaymentResponse GetByIdAndStatus(int id);
    void CheckPayment(int id, PaymentRequest model);
    void Update(int id, UpdatePaymentRequest model);
    void Edit(int id, EditPaymentRequest model);
    void Delete(int id);
    void Create(CreatePaymentRequest model);
}