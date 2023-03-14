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
    
    public string generateCodeOrder()
    {
        Random random = new Random();
        string code = random.Next(Convert.ToInt32(Constants.MINNUMBER), Convert.ToInt32(Constants.MAXNUMBER)).ToString();
        DateTime dateTime = DateTime.Today;
        string date = "";
        if (dateTime.Month < 10)
        {
            date = dateTime.Month.ToString();
            date = "0" + date;
        }
        else
        {
            date = dateTime.Month.ToString();
        }
       
        string newcode = "MP" + date + code;
        return newcode;
    }
    
    public string theMonth(int month) {
        string[] monthNames = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
        return monthNames[month];
    }
    
}