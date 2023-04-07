using AutoMapper;
using myProject.Config;
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
        return _context.Payments;
    }

    public IEnumerable<Payment> GetAllByStatus(Enums.PaymentStatus status)
    {
        var newstatus = status;
        if (newstatus == null || status == Enums.PaymentStatus.DELETED)
        {
            newstatus = Enums.PaymentStatus.UNPAID;
        }
        return _context.Payments.Where(v => v.status == newstatus).ToList();
    }

    public Payment GetById(int id)
    {
        return getPaymentById(id);
    }

    public PaymentResponse GetByIdAndStatus(int id)
    {
       return getPaymentByIdAndStatus(id);
    }

    public void CheckPayment(int id, PaymentRequest model)
    {
        var payment = getPaymentById(id);

        var bank = _context.TestBankTransfers.Find(1);
        if (model.nameOfCard != bank.nameOfCard)
        {
            throw new AppException("Name of care not true");
        }
        
        if (model.phoneNumber != bank.phoneNumber)
        {
            throw new AppException("Phone not true");
        }
        
        if (model.numberOfCard != bank.numberOfCard)
        {
            throw new AppException("Number of card not true");
        }

        payment.status = Enums.PaymentStatus.PAID;
        payment.UpdatedAt = DateTimeOffset.Now;

        var order = _context.Orders.Find(payment.order_id);
        if (order == null || order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order not found");
        }
        
        var transaction = new Transactions();
        
        transaction.customer_id = order.customer_id;
        transaction.dateTime = DateTimeOffset.Now;
        transaction.insurance_id = order.insurance_id;
        transaction.payment_id = payment.id;
        transaction.total_money = payment.totalPrice.ToString();
        transaction.status = Enums.TransactionStatus.PAID;
        transaction.CreatedAt = DateTimeOffset.Now;
        
        _context.Transactions.Add(transaction);
        
        _context.Payments.Update(payment);
        _context.SaveChanges();
    }

    public void Update(int id, UpdatePaymentRequest model)
    {
        var payment = getPaymentById(id);

        payment.UpdatedAt = DateTimeOffset.Now.AddHours(7);

        var order = _context.Orders.Find(model.order_id);
        if (order == null || order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order not found");
        }
        
        _mapper.Map(model, payment);
        _context.Payments.Update(payment);
        _context.SaveChanges();
    }

    public void Edit(int id, EditPaymentRequest model)
    {
        var payment = getPaymentById(id);

        payment.UpdatedAt = DateTimeOffset.Now.AddHours(7);

        var order = _context.Orders.Find(model.order_id);
        if (order == null || order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order not found");
        }
        
        _mapper.Map(model, payment);
        _context.Payments.Update(payment);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var payment = getPaymentById(id);
        payment.status = Enums.PaymentStatus.DELETED;
        payment.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Payments.Update(payment);
        _context.SaveChanges();
    }

    public void Create(CreatePaymentRequest model)
    {
        var payment = _mapper.Map<Payment>(model);

        payment.CreatedAt = DateTimeOffset.Now.AddHours(7);

        var order = _context.Orders.Find(model.order_id);
        if (order == null || order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order not found");
        }
        
        _context.Payments.Add(payment);
        _context.SaveChanges();
    }
    
    private Payment getPaymentById(int id)
    {
        var payment = _context.Payments.Find(id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED) 
            throw new KeyNotFoundException("Payment not found");
        return payment;
    }
    
    private PaymentResponse getPaymentByIdAndStatus(int id)
    {
        var payment = _context.Payments.Find(id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED) 
            throw new KeyNotFoundException("Payment not found");

        var order = _context.Orders.Find(payment.order_id);
        if (order == null || order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order of not found"); 
        }

        var response = _mapper.Map<PaymentResponse>(payment);
        return response;
    }
}