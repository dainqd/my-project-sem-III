using AutoMapper;
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
        throw new NotImplementedException();
    }

    public IEnumerable<Transactions> GetAllByStatus(Enums.TransactionStatus status)
    {
        throw new NotImplementedException();
    }

    public Transactions GetById(int id)
    {
        throw new NotImplementedException();
    }

    public TransactionResponse GetByIdAndStatus(int id)
    {
        throw new NotImplementedException();
    }

    public void Update(int id, UpdateTransactionRequest model)
    {
        throw new NotImplementedException();
    }

    public void Delete(int id)
    {
        throw new NotImplementedException();
    }

    public void Create(CreateTransactionRequest model)
    {
        throw new NotImplementedException();
    }
}