using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;

namespace myProject.Controllers;

[Route("api/categories")]
[ApiController]
public class CategoryController : ControllerBase
{
    private ICategoryService _categoryService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public CategoryController(
        ICategoryService categoryService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _categoryService = categoryService;
        _mapper = mapper;
    }
    
    //[Authorize]
    [HttpGet("list")]
    public IActionResult? GetAll()
    {
        var categories = _categoryService.GetAll();
        return Ok(categories);
    }
    
    //[Authorize]
    [HttpGet("detail/{id}")]
    public IActionResult? GetById(int id)
    {
        var category = _categoryService.GetById(id);
        return Ok(category);
    }
}