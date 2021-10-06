using SpaApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpaApi.Helpers
{
    public interface IS3Service
    {
        Task<S3Response> UploadFileAsync(string subdir, string fileFullPath);

        Task<S3Response> DeleteFileAsync(string subdir, string filename);
    }
}
