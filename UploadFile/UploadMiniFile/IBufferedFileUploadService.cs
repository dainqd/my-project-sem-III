﻿namespace myProject.UploadFile.UploadMiniFile;

public interface IBufferedFileUploadService
{
    Task<bool> UploadFile(IFormFile file);
}