using Microsoft.EntityFrameworkCore;
using myProject.Entities;
using myProject.Entities.Location;
using myProject.Entities.PaymentInfo;

namespace myProject.Context;

public class MySQLDBContext : DbContext
{
    public DbSet<User> User { get; set; }
    public DbSet<Insurances> Insurances { get; set; }
    public DbSet<Categories> Categories { get; set; }
    public DbSet<Customers> Customers { get; set; }
    public DbSet<Credential> Credentials { get; set; }
    public DbSet<Feedbacks> Feedbacks { get; set; }
    public DbSet<Claims> Claims { get; set; }
    public DbSet<Orders> Orders { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<Transactions> Transactions { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<Province> Provinces { get; set; }
    public DbSet<City> Cities { get; set; }
    
    //
    public DbSet<TestBankTransfer> TestBankTransfers { get; set; }
    
    public MySQLDBContext(DbContextOptions<MySQLDBContext> options) : base(options)
    {
        
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        new DbInitializer(modelBuilder).Seed();
    }
}