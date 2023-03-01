using Microsoft.AspNetCore.Mvc;

namespace myProject.UploadFile.UploadMiniFile;

[ApiController]
[Route("upload")]
public class BufferedFileUploadController : ControllerBase
{
    readonly IBufferedFileUploadService _bufferedFileUploadService;

    public BufferedFileUploadController(IBufferedFileUploadService bufferedFileUploadService)
    {
        _bufferedFileUploadService = bufferedFileUploadService;
    }
    
    [HttpPost]
    [Route("image")]
    public async Task<ActionResult> Index(IFormFile file)
    {
        try
        {
            if (await _bufferedFileUploadService.UploadFile(file))
            {
                var  message = "File Upload Successful";
                return Ok(message);
            }
            else
            {
                var  message = "File Upload Failed";
                return BadRequest(message);
            }
        }
        catch (Exception ex)
        {
            //Log ex
            var  message = "File Upload Failed";
            return BadRequest(message);
        }
    }
}