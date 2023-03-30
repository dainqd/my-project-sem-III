namespace myProject.Dtos.Appointment;

public class CreateAppointmentRequest
{
    public string fullname { get; set; }
    public int insurance_id { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public string message { get; set; } = "";
}