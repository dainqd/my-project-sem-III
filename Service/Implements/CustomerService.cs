using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Customer;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class CustomerService : ICustomerService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;

    public CustomerService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;

    }

    public IEnumerable<Customers> GetAll()
    {
       return _context.Customers;
    }

    public IEnumerable<Customers> GetAllByStatus(Enums.CustomerStatus status)
    {
        status = Enums.CustomerStatus.ACTIVE;
        return _context.Customers.Where(v => v.status == status).ToList();
    }

    public Customers GetById(int id)
    {
        return getCustomerById(id);
    }

    public CustomerResponse GetByIdAndStatus(int id)
    {
        return getInsurancesByIdAndStatus(id);
    }

    public void Update(int id, UpdateCustomerRequest model)
    {
        var customer = getCustomerById(id);
        
        if(model.email == null)
            throw new AppException("Email invalid!");
        customer.UpdatedAt = DateTimeOffset.Now.AddHours(7);
         _mapper.Map(model, customer);

        _context.Customers.Update(customer);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var customer = getCustomerById(id);
        customer.status = Enums.CustomerStatus.DELETED;
        customer.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Customers.Update(customer);
        _context.SaveChanges();
    }

    public void Create(CreateCustomerRequest model)
    {
        var customer = _mapper.Map<Customers>(model);
        
        if (model.email == null)
        {
            throw new AppException("Email invalid!");
        }
        
        customer.CreatedAt = DateTimeOffset.Now.AddHours(7);
        _mapper.Map(model, customer);
        _context.Customers.Add(customer);
        _context.SaveChanges();
    }
    
    
    private Customers getCustomerById(int id)
    {
        var customer = _context.Customers.Find(id);
        if (customer == null || customer.status == Enums.CustomerStatus.DELETED)
        {
            throw new KeyNotFoundException("Customer not found");   
        }
        
        return customer;
    }
    
    private CustomerResponse getInsurancesByIdAndStatus(int id)
    {
        var customer = _context.Customers.Find(id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer not found");   
        }

        var response = _mapper.Map<CustomerResponse>(customer);
        return response;
    }
}