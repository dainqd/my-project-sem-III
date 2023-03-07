using AutoMapper;
using myProject.Dtos.Auth;
using myProject.Dtos.Customer;
using myProject.Dtos.Feedback;
using myProject.Dtos.Insurances;
using myProject.Dtos.Permission;
using myProject.Dtos.User;
using myProject.Entities;

namespace myProject.Config;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // User -> AuthenticateResponse
        CreateMap<User, AuthenticateResponse>();

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
        
        // UpdateFeedbackRequest -> Feedbacks
        CreateMap<UpdateFeedbackRequest, Feedbacks>();
        
        // Feedbacks -> FeedbackResponse
        CreateMap<Feedbacks, FeedbackResponse>();
    }
}