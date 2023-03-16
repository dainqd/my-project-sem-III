using AutoMapper;
using myProject.Context;
using myProject.Dtos.Payment;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class PaymentService : IPaymentService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public PaymentService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Payment> GetAll()
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Payment> GetAllByStatus(Enums.PaymentStatus status)
    {
        throw new NotImplementedException();
    }

    public Payment GetById(int id)
    {
        throw new NotImplementedException();
    }

    public PaymentResponse GetByIdAndStatus(int id)
    {
        throw new NotImplementedException();
    }

    public void CheckPayment(int id, PaymentRequest model)
    {
        throw new NotImplementedException();
    }

    public void Update(int id, UpdatePaymentRequest model)
    {
        throw new NotImplementedException();
    }

    public void Edit(int id, EditPaymentRequest model)
    {
        throw new NotImplementedException();
    }

    public void Delete(int id)
    {
        throw new NotImplementedException();
    }

    public void Create(CreatePaymentRequest model)
    {
        throw new NotImplementedException();
    }
}