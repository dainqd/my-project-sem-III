using AutoMapper;
using myProject.Config;
using myProject.Context;
using myProject.Dtos.Products;
using myProject.Entities;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Service.Implements;

public class ProductService : IProductService
{
    private MySQLDBContext _context;
    private readonly IMapper _mapper;
    
    public ProductService(
        MySQLDBContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public IEnumerable<Products> GetAll()
    {
        return _context.Products;
    }

    public IEnumerable<Products> GetAllByStatus(ProductStatus status)
    {
        status = ProductStatus.ACTIVE;
        return _context.Products.Where(v => v.status == status).ToList();
    }

    public Products GetById(int id)
    {
        return getProducts(id);
    }

    public ProductResponse GetByIdAndStatus(int id)
    {
        return getProductsByIdAndStatus(id);
    }

    public void Update(int id, UpdateProductRequest model)
    {
        var products = getProducts(id);
        
        if(model.name == null)
            throw new AppException("Name invalid!");
        products.UpdatedAt = DateTimeOffset.Now.AddHours(7);
        var categories = _context.Categories.Find(model.category_id);
        if (categories == null)
        {
            throw new KeyNotFoundException("Categories not found");
        }
        _mapper.Map(model, products);
        _context.Products.Update(products);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var products = getProducts(id);
        products.status = ProductStatus.DELETED;
        products.DeletedAt = DateTimeOffset.Now.AddHours(7);
        _context.Products.Update(products);
        _context.SaveChanges();
    }

    public void Create(CreateProductRequest model)
    {
        var products = _mapper.Map<Products>(model);

        if (model.name == null)
        {
            throw new AppException("Name invalid!");
        }
        var categories = _context.Categories.Find(model.category_id);
        if (categories == null)
        {
            throw new KeyNotFoundException("Categories not found");
        }
        products.CreatedAt = DateTimeOffset.Now.AddHours(7);

        _context.Products.Add(products);
        _context.SaveChanges();
    }
    
    private Products getProducts(int id)
    {
        var products = _context.Products.Find(id);
        if (products == null) 
            throw new KeyNotFoundException("Product not found");
        return products;
    }
    
    private ProductResponse getProductsByIdAndStatus(int id)
    {
        var products = _context.Products.Find(id);
        if (products == null) 
            throw new KeyNotFoundException("Products not found");
        if (products.status != ProductStatus.ACTIVE)
            throw new KeyNotFoundException("Products not found");
        var category = _context.Categories.Find(products.category_id);
        if (category == null)
        {
            throw new KeyNotFoundException("Product not found"); 
        }
        // // chịu khó hard đoạn này vì không map được!
        // var response = new ProductResponse();
        // response.id = products.id;
        // response.name = products.name;
        // response.quantity = products.quantity;
        // response.price = products.price;
        // response.description = products.description;
        // response.thubnail = products.thubnail;
        // response.status = products.status.ToString();
        // response.category_name = category.category;
        
        var response = _mapper.Map<ProductResponse>(products);
        return response;
    }
}