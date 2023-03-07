using Microsoft.EntityFrameworkCore;
using myProject.Entities;

namespace myProject.Context;

public class MySQLDBContext : DbContext
{
    public DbSet<User> User { get; set; }
    public DbSet<Insurances> Insurances { get; set; }
    public DbSet<Categories> Categories { get; set; }
    public DbSet<Customers> Customers { get; set; }
    public DbSet<Credential> Credentials { get; set; }
    public DbSet<Feedbacks> Feedbacks { get; set; }
    
    public MySQLDBContext(DbContextOptions<MySQLDBContext> options) : base(options)
    {
        
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        new DbInitializer(modelBuilder).Seed();
    }
}