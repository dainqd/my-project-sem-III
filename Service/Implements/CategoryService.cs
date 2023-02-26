using AutoMapper;
using myProject.Context;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class CategoryService : ICategoryService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public CategoryService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }


    public IEnumerable<Categories> GetAll()
    {
        return _context.Categories;
    }

    public Categories GetById(int id)
    {
        return getCategory(id);
    }

    public void Update(int id, string name, CategoryStatus status)
    {
        var categories = getCategory(id);
        if (name == null)
        {
            throw new KeyNotFoundException("Category name valid");
        }
        if (status == null)
        {
            throw new KeyNotFoundException("Category status valid");
        }
        if (status == CategoryStatus.DELETED)
        {
            throw new KeyNotFoundException("Category status illegal");
        }
        categories.category = name;
        categories.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        _context.Categories.Update(categories);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var categories = getCategory(id);
        categories.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Categories.Remove(categories);
        _context.SaveChanges();
    }

    public void Create(string name, CategoryStatus status)
    {
        if (name == null)
        {
            throw new KeyNotFoundException("Category name valid");
        }

        if (status != CategoryStatus.ACTIVE)
        {
            throw new KeyNotFoundException("Category status valid");
        }
        var category = new Categories();
        category.category = name;
        category.status = status;
        category.CreatedAt = DateTimeOffset.Now.AddHours(7);
        _context.Categories.Add(category);
        _context.SaveChanges();
    }
    //
    private Categories getCategory(int id)
    {
        var categories = _context.Categories.Find(id);
        if (categories == null)
        {
            throw new KeyNotFoundException("Category not found");
        }
        return categories;
    }
}