using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Dtos.Products;
using myProject.Service.Interfaces;

namespace myProject.Controllers.Admin;

[Route("admin/api/products")]
[Authorize]
[ApiController]
public class AdminProductController : ControllerBase
{
    private IProductService _productService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminProductController(
        IProductService productService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _productService = productService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var products = _productService.GetAll();
        return Ok(products);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var product = _productService.GetById(id);
        return Ok(product);
    }
    
    [HttpPost]
    public IActionResult Create(CreateProductRequest model)
    {
        _productService.Create(model);
        return Ok(new { message = "Product created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateProductRequest model)
    {
        _productService.Update(id, model);
        return Ok(new { message = "Product updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _productService.Delete(id);
        return Ok(new { message = "Product deleted" });
    }
}