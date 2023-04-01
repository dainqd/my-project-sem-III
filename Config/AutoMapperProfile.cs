using AutoMapper;
using myProject.Dtos.Appointment;
using myProject.Dtos.Auth;
using myProject.Dtos.Customer;
using myProject.Dtos.Feedback;
using myProject.Dtos.Insurances;
using myProject.Dtos.Member;
using myProject.Dtos.Order;
using myProject.Dtos.Payment;
using myProject.Dtos.Permission;
using myProject.Dtos.Transaction;
using myProject.Dtos.User;
using myProject.Entities;

namespace myProject.Config;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // User -> AuthenticateResponse
        CreateMap<User, AuthenticateResponse>();
        
        // User -> UserResponse
        CreateMap<User, UserResponse>();

        // RegisterRequest -> User
        CreateMap<RegisterRequest, User>();
        
        // CreateRequest -> User
        CreateMap<CreateRequest, User>();

        // UpdateRequest -> User
        CreateMap<UpdateRequest, User>()
            .ForAllMembers(x => x.Condition(
                (src, dest, prop) =>
                {
                    // ignore null & empty string properties
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

                    return true;
                }
            ));
        
        // RegisterRequest -> User
        CreateMap<ChangeRoleRequest, User>();
        
        // CreateRequest -> User
        CreateMap<ChangeStatusRequest, User>();
        
        //Insurances
        // Insurances -> InsuranceResponse
        CreateMap<Insurances, InsuranceResponse>();
        // CreateInsuranceRequest -> Insurances
        CreateMap<CreateInsuranceRequest, Insurances>();
        // UpdateInsuranceRequest -> Insurances
        CreateMap<UpdateInsuranceRequest, Insurances>();
        
        // Customer
        // CreateCustomerRequest -> Customers
        CreateMap<CreateCustomerRequest, Customers>();
        // UpdateCustomerRequest -> Customer
        CreateMap<UpdateCustomerRequest, Customers>();
        // Customer -> CustomerResponse
        CreateMap<Customers, CustomerResponse>();
        
        // Feedbacks
        // CreateFeedbackRequest -> Feedbacks
        CreateMap<CreateFeedbackRequest, Feedbacks>();
        
        // Orders
        // CreateOrderRequest -> Orders
        CreateMap<CreateOrderRequest, Orders>();
        // UpdateOrderRequest -> Orders
        CreateMap<UpdateOrderRequest, Orders>();
        // EditOrderRequest -> Orders
        CreateMap<EditOrderRequest, Orders>();
        // Orders -> OrderResponse
        CreateMap<Orders, OrderResponse>();
        
        // Payment
        // CreatePaymentRequest -> Payment
        CreateMap<CreatePaymentRequest, Payment>();
        // UpdatePaymentRequest -> Payment
        CreateMap<UpdatePaymentRequest, Payment>();
        // EditPaymentRequest -> Payment
        CreateMap<EditPaymentRequest, Payment>();
        // Check payment
        // PaymentRequest -> Payment
        CreateMap<PaymentRequest, Payment>();
        // Payment -> PaymentResponse
        CreateMap<Orders, PaymentResponse>();
        
        // Transactions
        // CreateTransactionRequest -> Transactions
        CreateMap<CreateTransactionRequest, Transactions>();
        // UpdateTransactionRequest -> Transactions
        CreateMap<UpdateTransactionRequest, Transactions>();
        // Transactions -> TransactionResponse
        CreateMap<Transactions, TransactionResponse>();
        
        // Members
        // CreateMemberRequest -> Members
        CreateMap<CreateMemberRequest, Members>();
        // UpdateMemberRequest -> Members
        CreateMap<UpdateMemberRequest, Members>();
        // Members -> MemberResponse
        CreateMap<Members, MemberResponse>();
        
        // Appointments
        // CreateAppointmentRequest -> Appointments
        CreateMap<CreateAppointmentRequest, Appointments>();
    }
}