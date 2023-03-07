using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Insurances;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class InsuranceService : IInsuranceService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public InsuranceService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Insurances> GetAll()
    {
        return _context.Insurances;
    }

    public IEnumerable<Insurances> GetAllByStatus(Enums.InsuranceStatus status)
    {
        status = Enums.InsuranceStatus.ACTIVE;
        return _context.Insurances.Where(v => v.status == status).ToList();
    }

    public Insurances GetById(int id)
    {
        return getInsurances(id);
    }

    public InsuranceResponse GetByIdAndStatus(int id)
    {
        return getInsurancesByIdAndStatus(id);
    }

    public void Update(int id, UpdateInsuranceRequest model)
    {
        var insurances = getInsurances(id);
        
        if(model.name == null)
            throw new AppException("Name invalid!");
        insurances.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        var categories = _context.Categories.Find(model.category_id);
        if (categories == null)
        {
            throw new KeyNotFoundException("Categories not found");
        }
        _mapper.Map(model, insurances);
        _context.Insurances.Update(insurances);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var insurances = getInsurances(id);
        insurances.status = Enums.InsuranceStatus.DELETED;
        insurances.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Insurances.Update(insurances);
        _context.SaveChanges();
    }

    public void Create(CreateInsuranceRequest model)
    {
        var insurances = _mapper.Map<Insurances>(model);

        if (model.name == null)
        {
            throw new AppException("Name invalid!");
        }
        var categories = _context.Categories.Find(model.category_id);
        if (categories == null)
        {
            throw new KeyNotFoundException("Categories not found");
        }
        insurances.CreatedAt = DateTimeOffset.Now.AddHours(7);

        _context.Insurances.Add(insurances);
        _context.SaveChanges();
    }
    
    private Insurances getInsurances(int id)
    {
        var insurances = _context.Insurances.Find(id);
        if (insurances == null) 
            throw new KeyNotFoundException("Insurance not found");
        return insurances;
    }
    
    private InsuranceResponse getInsurancesByIdAndStatus(int id)
    {
        var insurances = _context.Insurances.Find(id);
        if (insurances == null) 
            throw new KeyNotFoundException("Insurance not found");
        if (insurances.status != Enums.InsuranceStatus.ACTIVE)
            throw new KeyNotFoundException("Insurance not found");
        var category = _context.Categories.Find(insurances.category_id);
        if (category == null)
        {
            throw new KeyNotFoundException("Insurance not found"); 
        }
        var response = _mapper.Map<InsuranceResponse>(insurances);
        return response;
    }
}