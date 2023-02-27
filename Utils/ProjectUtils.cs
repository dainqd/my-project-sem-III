namespace myProject.Utils;

public class ProjectUtils
{
    public double GetRandomNumber(double minimum, double maximum)
    { 
        Random random = new Random();
        return random.NextDouble() * (maximum - minimum) + minimum;
    }

    public string generateCode()
    {
        Random random = new Random();
        string code = random.Next(Convert.ToInt32(Constants.MINNUMBER), Convert.ToInt32(Constants.MAXNUMBER)).ToString();
        return code;
    }
    
    public string theMonth(int month) {
        string[] monthNames = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
        return monthNames[month];
    }
    
}