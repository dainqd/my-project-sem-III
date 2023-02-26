using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using myProject.Config;
using myProject.Service.Interfaces;
using myProject.Utils.Enums;

namespace myProject.Controllers.Admin;

[Route("admin/api/categories")]
[Authorize]
[ApiController]
public class AdminCategoryController : ControllerBase
{
    private ICategoryService _categoryService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;
    
    public AdminCategoryController(
        ICategoryService categoryService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _categoryService = categoryService;
        _mapper = mapper;
    }
    
    [HttpGet("list")]
    public IActionResult GetAll()
    {
        var categories = _categoryService.GetAll();
        return Ok(categories);
    }
    
    [HttpGet("detail/{id}")]
    public IActionResult GetById(int id)
    {
        var category = _categoryService.GetById(id);
        return Ok(category);
    }
    
    [HttpPost]
    public IActionResult Create(string name, int status)
    { 
        CategoryStatus my_status = CategoryStatus.ACTIVE;
        if (status == (int)CategoryStatus.INACTIVE)
        {
            my_status = CategoryStatus.INACTIVE;
        }
        else
        {
            my_status = CategoryStatus.ACTIVE;
        }
        _categoryService.Create(name, my_status);
        return Ok(new { message = "Category created" });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, string name, int status)
    {
        CategoryStatus my_status = CategoryStatus.ACTIVE;
        if (status == (int)CategoryStatus.INACTIVE)
        {
            my_status = CategoryStatus.INACTIVE;
        }
        else
        {
            my_status = CategoryStatus.ACTIVE;
        }
        _categoryService.Update(id, name, my_status);
        return Ok(new { message = "Category updated" });
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _categoryService.Delete(id);
        return Ok(new { message = "Category deleted" });
    }
}