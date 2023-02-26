using AutoMapper;
using myProject.Dtos.Auth;
using myProject.Dtos.Products;
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
        // Products -> ProductResponse
        CreateMap<Products, ProductResponse>();
        
        // CreateProductRequest -> Products
        CreateMap<CreateProductRequest, Products>();
        
        // UpdateProductRequest -> Products
        CreateMap<UpdateProductRequest, Products>();
    }
}