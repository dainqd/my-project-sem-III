using AutoMapper;
using myProject.Context;
using myProject.Entities;
using myProject.Service.Interfaces;

namespace myProject.Service.Implements;

public class CredentialService : ICredentialService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public CredentialService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    
    public IEnumerable<Credential> GetAll()
    {
        return _context.Credentials;
    }

    public IEnumerable<Credential> GetAllById(int id)
    {
        return _context.Credentials.Where(c => c.user_id == id).ToList();
    }

    public Credential GetById(int id)
    {
        return getCredential(id);
    }

    public void Delete(int id)
    {
        var credential = getCredential(id);
        _context.Credentials.Remove(credential);
        _context.SaveChanges();
    }
    
    private Credential getCredential(int id)
    {
        var credential = _context.Credentials.Find(id);
        if (credential == null)
        {
            throw new KeyNotFoundException("Credential not found");
        }
        return credential;
    }
}