namespace myProject.UploadFile.UploadMiniFile;

public class BufferedFileUploadLocalService : IBufferedFileUploadService
{
    public async Task<bool> UploadFile(IFormFile file)
    {
        string path = "";
        string time = "";
        var localtime = DateTimeOffset.Now.AddHours(7);
        time = localtime.Ticks.ToString();
        try
        {
            if (file.Length > 0)
            {
                path = Path.GetFullPath(Path.Combine(Environment.CurrentDirectory, "Resources/Storage/Image"));
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                using (var fileStream = new FileStream(Path.Combine(path ,time + file.FileName), FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                return true;
            }
            else
            {
                return false;
            }
        }
        catch (Exception ex)
        {
            throw new Exception("File Copy Failed", ex);
        }
    }

    public async Task<bool> DeleteFile(string image)
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources\\Storage\\Image\\" , image);
        try
        {
            if (File.Exists(path))
            {
                File.Delete(path);
                return true;
            }
            else
            {
                throw new Exception("File path not found");  
            }
        }
        catch (Exception e)
        {
            throw new Exception("Delete file fail", e);
        }
    }

    public async  Task<string> ViewFile(string image)
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources\\Storage\\Image\\" , image);
        try
        {
            if (File.Exists(path))
            {
                return path;
            }
            else
            {
                throw new Exception("File not found");  
            }
        }
        catch (Exception e)
        {
            throw new Exception("Views file fail", e);
        }  
    }
}