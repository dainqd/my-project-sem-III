using Microsoft.EntityFrameworkCore;
using myProject.Entities;
using myProject.Entities.PaymentInfo;
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
                thumbnail = "https://insurshtml.websitelayout.net/img/service/service-details9.jpg?fbclid=IwAR0TDjs4fMdeSZnUjKu4emaQpgKbbOBzvHxf91clFsb8kWnX2os_zTv7XLc", 
                name = "Home Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "999.99"
            },
            new Insurances()
            {
                id = 2, category_id = 2, description = "Insurances",
                thumbnail = "https://insurshtml.websitelayout.net/img/service/service-details.jpg?fbclid=IwAR2Vgtt-qe_wWKrac9bIeuZTGDzwJ-ZAO6MbZegkWjKOabVghZWSbg0nb-s",
                name = "Life Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "599.99"
            },
            new Insurances()
            {
                id = 3, category_id = 3, description = "Insurances",
                thumbnail = "https://insurshtml.websitelayout.net/img/service/service-details7.jpg?fbclid=IwAR2Vgtt-qe_wWKrac9bIeuZTGDzwJ-ZAO6MbZegkWjKOabVghZWSbg0nb-s",
                name = "Motor Insurance",
                status = Enums.InsuranceStatus.ACTIVE, price = "399.99"
            },
            new Insurances()
            {
                id = 4, category_id = 4, description = "Insurances",
                thumbnail = "https://insurshtml.websitelayout.net/img/service/service-details8.jpg?fbclid=IwAR1IgI4eoC6bLiIbvgsfE0TvAEAe-NBdKWAVwpIgdqD-DkC4eO6sAOVetJ4",
                name = "Medical Insurance",
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
        modelBuilder.Entity<Members>().HasData(
            new Members()
            {
                id = 1, avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Hoang Minh Hieu", email = "hieuhm@gmail.com", phoneNumber = "0986868686", status = Enums.MemberStatus.ACTIVE,
                position = "Position", introduce = "Introduce", description = "Description"
            },
            new Members()
            {
                id = 2, avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Ngo Quang Dai", email = "dainq@gmail.com", phoneNumber = "0898898998", status = Enums.MemberStatus.ACTIVE,
                position = "Position", introduce = "Introduce", description = "Description"
            },
            new Members()
            {
                id = 3, avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Bui Tuan Anh", email = "anhbt@gmail.com", phoneNumber = "0986868686", status = Enums.MemberStatus.ACTIVE,
                position = "Position", introduce = "Introduce", description = "Description"
            },
            new Members()
            {
                id = 4, avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Nguyen Ngoc Hung", email = "hungnn@gmail.com", phoneNumber = "0898898998", status = Enums.MemberStatus.ACTIVE,
                position = "Position", introduce = "Introduce", description = "Description"
            },
            new Members()
            {
                id = 5, avatar = "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg",
                fullName = "Duong Cong Ke", email = "kedc@gmail.com", phoneNumber = "046409665", status = Enums.MemberStatus.ACTIVE,
                position = "Position", introduce = "Introduce", description = "Description"
            }
        );
        // test bank transfer
        modelBuilder.Entity<TestBankTransfer>().HasData(
            new TestBankTransfer()
            {
                id = 1,  nameOfCard = Constants.PAY_NAME, numberOfCard = Constants.PAY_NUMBER, phoneNumber = Constants.PAY_PHONE
            }
        );
    }
}