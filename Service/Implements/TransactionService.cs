using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Transaction;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class TransactionService : ITransactionService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public TransactionService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Transactions> GetAll()
    {
        return _context.Transactions;
    }

    public IEnumerable<Transactions> GetAllByUserID(int userId)
    {
        var user = _context.User.Find(userId);
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

        return _context.Transactions.Where(t => t.customer_id == thisCustomer.id).ToList();
    }

    public IEnumerable<Transactions> GetAllByStatus(Enums.TransactionStatus status)
    {
        return _context.Transactions.Where(v => v.status == Enums.TransactionStatus.SUCCESS).ToList();
    }

    public Transactions GetById(int id)
    {
        return getTransactionById(id);
    }

    public TransactionResponse GetByIdAndStatus(int id)
    {
        return getTransactionByIdAndStatus(id);
    }

    public void Update(int id, UpdateTransactionRequest model)
    {
        var transaction = getTransactionById(id);
        transaction.UpdatedAt = DateTimeOffset.Now.AddHours(7);

        var payment = _context.Payments.Find(transaction.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment not found"); 
        }

        var customer = _context.Customers.Find(transaction.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer not found");  
        }

        var insurance = _context.Insurances.Find(transaction.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");  
        }
        
        _mapper.Map(model, transaction);
        _context.Transactions.Update(transaction);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var transaction = getTransactionById(id);
        transaction.status = Enums.TransactionStatus.DELETED;
        transaction.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Transactions.Update(transaction);
        _context.SaveChanges();
    }

    public void Create(CreateTransactionRequest model)
    {
        var transaction = _mapper.Map<Transactions>(model);

        transaction.CreatedAt = DateTimeOffset.Now.AddHours(7);

        if (model.total_money == null)
        {
            throw new AppException("Total Money not null");
        }

        var payment = _context.Payments.Find(model.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment not found"); 
        }

        var customer = _context.Customers.Find(model.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer not found");  
        }

        var insurance = _context.Insurances.Find(model.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");  
        }
        
        _context.Transactions.Add(transaction);
        _context.SaveChanges();
    }
    
    private Transactions getTransactionById(int id)
    {
        var transaction = _context.Transactions.Find(id);
        if (transaction == null || transaction.status == Enums.TransactionStatus.DELETED)
        {
            throw new KeyNotFoundException("Transaction not found");
        }
        return transaction;
    }
    
    private TransactionResponse getTransactionByIdAndStatus(int id)
    {
        var transaction = _context.Transactions.Find(id);
        if (transaction == null || transaction.status == Enums.TransactionStatus.DELETED)
        {
            throw new KeyNotFoundException("Transaction not found");
        }
        
        var payment = _context.Payments.Find(transaction.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment not found"); 
        }

        var customer = _context.Customers.Find(transaction.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer not found");  
        }

        var insurance = _context.Insurances.Find(transaction.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");  
        }
            
        var response = _mapper.Map<TransactionResponse>(transaction);
        return response;
    }
}