using Microsoft.EntityFrameworkCore;
using myProject.Entities;
using myProject.Utils.Enums;

namespace myProject.Context;

public class DbInitializer
{
     private readonly ModelBuilder modelBuilder;

    public DbInitializer(ModelBuilder modelBuilder)
    {
        this.modelBuilder = modelBuilder;
    }

    public void Seed()
    {
        modelBuilder.Entity<User>().HasData(
            new User()
            {
                id = 1,
                avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                role = Role.ADMIN, username = "admin", email = "admin@gmail.com",
                firstName = "supper", lastName = "admin",
                phoneNumber = "0989889889", address = "Hai Phong",
                birthday = "10-02-2003", gender = "Male", status = UserStatus.ACTIVE,
                password = BCrypt.Net.BCrypt.HashPassword("123456")
            },
            new User()
            {
                id = 2, 
                avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                role = Role.USER, username = "user", email = "user@gmail.com",
                firstName = "User", lastName = "New",
                phoneNumber = "0968886868", address = "Ha Noi",
                birthday = "01-01-2003", gender = "Male", status = UserStatus.ACTIVE,
                password = BCrypt.Net.BCrypt.HashPassword("123456")

            }
        );
        modelBuilder.Entity<Categories>().HasData(
            new Categories()
            {
                id = 1, category = "Home", status = CategoryStatus.ACTIVE
            },
            new Categories()
            {
                id = 2, category = "Technology", status = CategoryStatus.ACTIVE
            },
            new Categories()
            {
                id = 3, category = "Electronic", status = CategoryStatus.ACTIVE
            }
        );
        modelBuilder.Entity<Products>().HasData(
            new Products()
            {
                id = 1, category_id = 1, name = "Macbook Pro M1", description = "Apple",
                quantity = 100,
                thubnail =
                    "https://gaumobile.com/images/products/2022/05/06/original/61y30dpqrvl_ac_sl1500__1651831708.jpg",
                status = ProductStatus.ACTIVE, price = "999.99"
            },
            new Products()
            {
                id = 2, category_id = 1, name = "iPhone 14 Pro Max", description = "Apple",
                quantity = 250,
                thubnail =
                    "https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2014%20Pro%20Max%20128/iPhone-14-Pro-Max-3.jpg",
                status = ProductStatus.ACTIVE, price = "599.99"
            }
        );
    }
}