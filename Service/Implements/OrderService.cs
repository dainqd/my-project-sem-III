using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Order;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class OrderService : IOrderService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public OrderService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Orders> GetAll()
    {
        return _context.Orders;
    }

    public IEnumerable<Orders> GetAllByStatus(Enums.OrderStatus status)
    {
        var newstatus = status;
        if (newstatus == null)
        {
            newstatus = Enums.OrderStatus.PREPARING;
        }
        return _context.Orders.Where(v => v.status == newstatus).ToList();
    }

    public Orders GetById(int id)
    {
        return getOrdeById(id);
    }

    public OrderResponse GetByIdAndStatus(int id)
    {
        return getOrderByIdAndStatus(id);
    }

    public void Update(int id, UpdateOrderRequest model)
    {
        var order = getOrdeById(id);
        
        if(model.name == null)
            throw new AppException("Name invalid!");
        
        order.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        
        var insurance = _context.Insurances.Find(model.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");
        }
        
        var payment = _context.Payments.Find(model.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment not found");
        }
        
        _mapper.Map(model, order);
        _context.Orders.Update(order);
        _context.SaveChanges();
    }

    public void Edit(int id, EditOrderRequest model)
    {
        var order = getOrdeById(id);

        if(model.name == null)
            throw new AppException("Name invalid!");
        
        if(model.orderCode == null)
            throw new AppException("OrderCode invalid!");
        
        order.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        
        var insurance = _context.Insurances.Find(model.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");
        }
        
        var customer = _context.Customers.Find(model.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer not found");
        }
        
        var payment = _context.Payments.Find(model.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment not found");
        }
        
        _mapper.Map(model, order);
        _context.Orders.Update(order);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var order = getOrdeById(id);
        order.status = Enums.OrderStatus.DELETED;
        order.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Orders.Update(order);
        _context.SaveChanges();
    }

    public void Create(CreateOrderRequest model)
    {
        var order = _mapper.Map<Orders>(model);

        if (model.name == null)
        {
            throw new AppException("Name invalid!");
        }
        
        ProjectUtils projectUtils = new ProjectUtils();
        order.orderCode = projectUtils.generateCodeOrder();

        var customer = _context.Customers.Find(model.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Category not found");
        }
        
        var insurance = _context.Insurances.Find(model.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance not found");
        }
        
        Payment payment = new Payment();
        payment.totalPrice = order.totalMoney;
        payment.paymentCode = order.orderCode + "PAY" + order.customer_id + order.insurance_id;
        Console.WriteLine(payment.paymentCode);
        payment.paymentMethods = Constants.PAY_DIRECT;
        payment.status = Enums.PaymentStatus.UNPAID;
        _context.Payments.Add(payment);
        _context.SaveChanges();

        var new_payment = _context.Payments.Last(x => x.paymentCode == payment.paymentCode);
        if (new_payment == null)
        {
            throw new KeyNotFoundException("Payment not found");
        }
        Console.WriteLine(new_payment.id);
        order.payment_id = new_payment.id;
        order.CreatedAt = DateTimeOffset.Now.AddHours(7);

        _context.Orders.Add(order);
        _context.SaveChanges();
    }
    
    private Orders getOrdeById(int id)
    {
        var order = _context.Orders.Find(id);
        if (order == null) 
            throw new KeyNotFoundException("Order not found");
        return order;
    }
    
    private OrderResponse getOrderByIdAndStatus(int id)
    {
        var order = _context.Orders.Find(id);
        if (order == null) 
            throw new KeyNotFoundException("Order not found");

        if (order.status == Enums.OrderStatus.DELETED)
        {
            throw new KeyNotFoundException("Order not found");
        }

        var customer = _context.Customers.Find(order.customer_id);
        if (customer == null || customer.status != Enums.CustomerStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Customer of not found"); 
        }
        
        var insurance = _context.Insurances.Find(order.insurance_id);
        if (insurance == null || insurance.status != Enums.InsuranceStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Insurance of not found"); 
        }
        
        var payment = _context.Payments.Find(order.payment_id);
        if (payment == null || payment.status == Enums.PaymentStatus.DELETED)
        {
            throw new KeyNotFoundException("Payment of not found"); 
        }
        
        var response = _mapper.Map<OrderResponse>(order);
        return response;
    }
}