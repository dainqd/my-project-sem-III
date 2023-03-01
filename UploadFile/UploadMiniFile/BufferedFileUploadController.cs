using Microsoft.AspNetCore.Mvc;

namespace myProject.UploadFile.UploadMiniFile;

[ApiController]
[Route("api")]
public class BufferedFileUploadController : ControllerBase
{
    readonly IBufferedFileUploadService _bufferedFileUploadService;

    public BufferedFileUploadController(IBufferedFileUploadService bufferedFileUploadService)
    {
        _bufferedFileUploadService = bufferedFileUploadService;
    }
    
    [HttpPost]
    [Route("upload/image")]
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
    
    [HttpPost]
    [Route("delete/image")]
    public async Task<ActionResult> Delete(string image)
    {
        try
        {
            if (await _bufferedFileUploadService.DeleteFile(image))
            {
                var  message = "File Delete Successful";
                return Ok(message);
            }
            else
            {
                var  message = "File Delete Failed";
                return BadRequest(message);
            }
        }
        catch (Exception e)
        {
            var  message = "File Delete Failed";
            return BadRequest(message);
        }
        //return RedirectToAction("Index");
    }
}