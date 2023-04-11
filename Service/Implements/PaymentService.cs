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

    public IEnumerable<Payment> GetAllByCustomerID(int userId)
    {
        var id = userId;
        var user = _context.User.Find(id);
        if (user == null || user.status != Enums.UserStatus.ACTIVE)
        {
            throw new AppException("User not found");
        }
        
        var customer = _context.Customers.First(c => c.user_id == user.id);
        if (customer == null)
        {
            var newCustomer = new Customers();
            if (user.lastName != null || user.firstName != null)
            {
                newCustomer.fullName = user.firstName + user.lastName;
            }
            else
            {
                newCustomer.fullName = user.username;
            }

            newCustomer.user_id = user.id;
            newCustomer.avatar = user.avatar;
            newCustomer.address = user.address;
            newCustomer.email = user.email;
            newCustomer.phoneNumber = user.phoneNumber;
            newCustomer.status = Enums.CustomerStatus.ACTIVE;
            _context.Customers.Add(newCustomer);
            _context.SaveChanges();
        }
        else if (customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new AppException("Customer not found");
        }
        
        var thisCustomer = _context.Customers.First(c => c.user_id == user.id);
        Console.WriteLine(thisCustomer.id);

        var orders = _context.Orders.Where(o => o.customer_id == thisCustomer.id).ToList();

        List<Payment> payments = new List<Payment>
        {
            
        };

        foreach (var order in orders)
        {
            var payment = _context.Payments.First(p => p.order_id == order.id);
            if (payment == null)
            {
                throw new AppException("Payment not found");
            }
            payments.Add(payment);
        }
        
        Console.WriteLine(payments);
        
        return payments;
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
        transaction.status = Enums.TransactionStatus.SUCCESS;
        transaction.CreatedAt = DateTimeOffset.Now;
        _context.Transactions.Add(transaction);
        var customer = _context.Customers.Find(order.customer_id);
        if (customer == null)
        {
            throw new KeyNotFoundException("Customer not found"); 
        }
        // save notification
        Notification notification = new Notification();
        notification.user_id = customer.user_id;
        notification.status = Enums.NotifyStatus.UNSEEN;
        notification.content = "Pay order successful!";
        _context.Notifications.Add(notification);
        
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
        
        var customer = _context.Customers.Find(order.customer_id);
        if (customer == null)
        {
            throw new KeyNotFoundException("Customer not found"); 
        }
        // save notification
        Notification notification = new Notification();
        notification.user_id = customer.user_id;
        notification.status = Enums.NotifyStatus.UNSEEN;
        notification.content = "Create payment order account successful!";
        _context.Notifications.Add(notification);
        
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