namespace myProject.Utils.Enums;

public class Enums
{
    public enum Role
    {
        ADMIN,
        USER
    }
    
    public enum UserStatus
    {
        ACTIVE,
        INACTIVE,
        BLOCKED,
        BANNED,
        DELETED
    }
    
    public enum CategoryStatus
    {
        ACTIVE,
        INACTIVE,
        DELETED
    }
    
    public enum FeedbackStatus
    {
        APPROVED, 
        PENDING, 
        REFUSE, 
        COMPLETE, 
        DELETED
    }
    
    public enum CustomerStatus
    {
        ACTIVE,
        INACTIVE,
        DELETED
    }
    
    public enum InsuranceStatus
    {
        ACTIVE,
        INACTIVE,
        DELETED
    }
    
    public enum OrderStatus
    {
        PREPARING, 
        DELIVERY, 
        SUCCESS, 
        FAIL, 
        DELETED
    }
    
    public enum PaymentStatus
    {
        UNPAID,
        PAID,
        DELETED
    }
    
    public enum PaymentMethod
    {
        PAY_DIRECT,
        PAY_CARD,
        PAY_WALLET,
        PAY_BANK
    }
    
    public enum TransactionStatus
    {
        PAID,
        DELETED
    }
    
    public enum MemberStatus
    {
        ACTIVE,
        INACTIVE,
        DELETED
    }
}