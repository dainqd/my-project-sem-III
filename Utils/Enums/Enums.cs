﻿namespace myProject.Utils.Enums;

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
}