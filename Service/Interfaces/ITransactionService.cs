using myProject.Dtos.Transaction;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Service.Interfaces;

public interface ITransactionService
{
    IEnumerable<Transactions> GetAll();
    IEnumerable<Transactions> GetAllByStatus(Enums.TransactionStatus status);
    Transactions GetById(int id);
    TransactionResponse GetByIdAndStatus(int id);
    void Update(int id, UpdateTransactionRequest model);
    void Delete(int id);
    void Create(CreateTransactionRequest model);
}