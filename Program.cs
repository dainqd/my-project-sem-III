using System.Text;
using System.Text.Json.Serialization;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using myProject._mail_config;
using myProject._mail_config.Implement;
using myProject._mail_config.Interface;
using myProject.Authorization;
using myProject.Authorization.Implements;
using myProject.Authorization.Interfaces;
using myProject.Config;
using myProject.Context;
using myProject.Service.Implements;
using myProject.Service.Interfaces;
using myProject.UploadFile.UploadMiniFile;
using myProject.Utils.Enums;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;

var settings = builder.Configuration.GetSection("AppSettings").Get<AppSettings>();
var key = settings.Secret;

const string Admin = nameof(Role.ADMIN);
const string User = nameof(Role.USER);

// Add services to the container.

services.AddDbContext<MySQLDBContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

services.AddCors();

services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});

services.AddAuthorization(options =>
{
    options.AddPolicy("Admin", policy => policy.RequireRole(Admin));
    options.AddPolicy("User", policy => policy.RequireRole(User));
});

services.AddControllers().AddJsonOptions(x =>
{
    // serialize enums as strings in api responses (e.g. Role)
    x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

    // ignore omitted parameters on models to enable optional params (e.g. User update)
    x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});
services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// configure strongly typed settings object
services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// configure DI for application services
services.AddScoped<IJwtUtils, JwtUtils>();

//configure DI for application services
services.AddScoped<IUserService, UserService>();
services.AddScoped<IAuthService, AuthService>();
services.AddScoped<IProductService, ProductService>();
services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddTransient<IBufferedFileUploadService, BufferedFileUploadLocalService>();

var emailConfig = builder.Configuration
    .GetSection("EmailConfiguration")
    .Get<EmailConfiguration>();
builder.Services.AddSingleton(emailConfig);

services.AddScoped<IEmailSender, EmailSender>();

builder.Services.AddSingleton(emailConfig);

services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

// global error handler
app.UseMiddleware<ErrorHandlerMiddleware>();
app.UseMiddleware<JwtMiddleware>();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();