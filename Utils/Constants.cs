using Microsoft.AspNetCore.Mvc;

namespace myProject.Utils;

public static class Constants
{
    // Insurances categories
    public const string LIFE_INSURACE = "LIFE_INSURACE";
    public const string MEDICAL_INSURACE = "MEDICAL_INSURACE";
    public const string MOTOR_INSURACE = "MOTOR_INSURACE";
    public const string HOME_INSURACE = "HOME_INSURACE";
    // Payment method
    public const string PAY_DIRECT = "Payment by direct";
    public const string PAY_CARD = "Payment by card";
    public const string PAY_WALLET = "Payment by e-wallet";
    public const string PAY_BANK = "Payment by bank transfer";

    //Auth message
    public const string LOGIN = "LOGIN_ACCONT";
    public const string LOGOUT = "LOGOUT_ACCOUNT";
    public const string REGISTER = "REGISTER_ACCONT";
    public const string VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
    public const string ACTIVE_ACCOUNT = "ACTIVE_ACCOUNT";
    public const string CHANGE_PASS = "CHANGE_PASSWORD_ACCOUNT";
    public const string FORGOT_PASS = "PORGOT_PASSWORD_ACCOUNT";
    public const string UPDATE_INFO = "UPDATE_INFORMATION_ACCOUNT";
    public const string CHANGE_ROLE = "CHANGE_ROLE";
    public const string CHANGE_STATUS = "CHANGE_STATUS";
    // Value random create code
    public const string MINNUMBER = "100000";
    public const string MAXNUMBER = "999999";
    //
    public const string EMAIL_VERIFY = "Verify Account";
    public const string EMAIL_FORGOT = "Forgot Password";
    // Message
    public const string id_not_found = "id not found";
    public const string account_not_found = "account not found";
    public const string account_email_required = "email not required";
    public const string account_password_required = "email not required";
    public const string account_email_password_required = "Username or Password invalid!";
    public const string account_not_verified = "account not verified";
    public const string account_not_active = "Account not active";
    public const string account_blocked = "account blocked";
    public const string account_banned = "account banned";
    public const string account_deleted = "account deleted";
    public const string account_password_incorrect = "incorrect password";
    public const string account_password_invalid = "invalid password";
    public const string account_email_password_incorrect = "Username or Password incorrect!";
    public const string account_username_exist = "exits an username";
    public const string account_email_exist = "exits an email";
    public const string account_verify_empty = "account verify no empty";
    public const string account_verified = " account veried";
    public const string account_verifycode_incorrect = "account verify code incorrect";
    public const string register_success = "User register successfully!";
    public const string update_success = "Update Success";
    public const string delete_success = "Delete success";
    public const string create_success = "Create Success";
    public const string create_fail = "Create failed";
}