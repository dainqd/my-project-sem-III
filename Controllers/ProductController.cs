using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers;

[Route("api/products")]
[ApiController]
public class ProductController : ControllerBase
{
    private IProductService _productService;
    private ICategoryService _categoryService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public ProductController(
        IProductService productService,
        ICategoryService categoryService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _productService = productService;
        _categoryService = categoryService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var products = _productService.GetAllByStatus(ProductStatus.ACTIVE);
        return Ok(products);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var product = _productService.GetByIdAndStatus(id);
        return Ok(product);
    }
}