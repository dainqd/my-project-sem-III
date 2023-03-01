namespace myProject.UploadFile.UploadMiniFile;

public class BufferedFileUploadLocalService : IBufferedFileUploadService
{
    public async Task<bool> UploadFile(IFormFile file)
    {
        string path = "";
        try
        {
            if (file.Length > 0)
            {
                path = Path.GetFullPath(Path.Combine(Environment.CurrentDirectory, "Resources/Storage/Image"));
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                using (var fileStream = new FileStream(Path.Combine(path, file.FileName), FileMode.Create))
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
}