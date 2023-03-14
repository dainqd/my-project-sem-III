using Microsoft.EntityFrameworkCore;
using myProject.Entities;
using myProject.Utils;
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
                role = Enums.Role.ADMIN, username = "admin", email = "admin@gmail.com",
                firstName = "supper", lastName = "admin", isVerify = true,
                phoneNumber = "0989889889", address = "Ha Noi",
                birthday = "10-02-2003", gender = "Male", status = Enums.UserStatus.ACTIVE,
                password = BCrypt.Net.BCrypt.HashPassword("123456")
            },
            new User()
            {
                id = 2, 
                avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                role = Enums.Role.USER, username = "user", email = "user@gmail.com",
                firstName = "User", lastName = "New", isVerify = true,
                phoneNumber = "0968886868", address = "Ha Noi",
                birthday = "01-01-2003", gender = "Male", status = Enums.UserStatus.ACTIVE,
                password = BCrypt.Net.BCrypt.HashPassword("123456")

            }
        );
        modelBuilder.Entity<Categories>().HasData(
            new Categories()
            {
                id = 1, category = Constants.HOME_INSURACE, status = Enums.CategoryStatus.ACTIVE
            },
            new Categories()
            {
                id = 2, category = Constants.LIFE_INSURACE, status = Enums.CategoryStatus.ACTIVE
            },
            new Categories()
            {
                id = 3, category = Constants.MOTOR_INSURACE, status = Enums.CategoryStatus.ACTIVE
            },
            new Categories()
            {
                id = 4, category = Constants.MEDICAL_INSURACE, status = Enums.CategoryStatus.ACTIVE
            }
        );
        modelBuilder.Entity<Insurances>().HasData(
            new Insurances()
            {
                id = 1, category_id = 1, description = "Insurances",
                thumbnail = "", name = "Home Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "999.99"
            },
            new Insurances()
            {
                id = 2, category_id = 2, description = "Insurances",
                thumbnail = "", name = "Life Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "599.99"
            },
            new Insurances()
            {
                id = 3, category_id = 3, description = "Insurances",
                thumbnail = "", name = "Motor Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "399.99"
            },
            new Insurances()
            {
                id = 4, category_id = 4, description = "Insurances",
                thumbnail = "", name = "Medical Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "399.99"
            }
        );
        modelBuilder.Entity<Customers>().HasData(
            new Customers()
            {
                id = 1, address = "New York", avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Mary Jr.", user_id = 2, email = "user@gmail.com", phoneNumber = "046409665", status = Enums.CustomerStatus.ACTIVE
            },
            new Customers()
            {
                id = 2, address = "Paris", avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "John AS.", user_id = 2, email = "customer@gmail.com", phoneNumber = "046409665", status = Enums.CustomerStatus.ACTIVE
            }
        );
    }
}