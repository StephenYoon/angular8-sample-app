using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Microsoft.Extensions.Options;
using SpaApi.Models;
using System;
using System.Net;
using System.Threading.Tasks;

namespace SpaApi.Helpers
{
    public class S3Service : IS3Service
    {
        private readonly IAmazonS3 _client;
        
        private const string _accessKey = "abc";
        private const string _secretAccessKey = "abc";
        private const string _bucketName = "openbooker";

        public S3Service()
        {
            _client = new AmazonS3Client(_accessKey, _secretAccessKey);
        }

        public S3Service(IAmazonS3 client)
        {
            _client = client;
        }

        /// <summary>
        /// Upload a file to an S3
        /// </summary>
        /// <param name="subdir">sub directory of the file to be store</param>
        /// <param name="fileFullPath">Full file path where the file to be upload</param>
        /// <returns></returns>
        public async Task<S3Response> UploadFileAsync(string subdir, string fileFullPath)
        {
            try
            {
                var fileTransferUtility = new TransferUtility(_client);

                var bucketFullPath = _bucketName;

                // Option 1 (Upload an existing file in your computer to the S3)
                await fileTransferUtility.UploadAsync(fileFullPath, bucketFullPath);
            }
            catch (AmazonS3Exception e)
            {
                return new S3Response
                {
                    Message = e.Message,
                    Status = e.StatusCode
                };
            }
            catch (Exception e)
            {
                return new S3Response
                {
                    Message = e.Message,
                    Status = HttpStatusCode.InternalServerError
                };
            }

            return new S3Response
            {
                Message = "File uploaded Successfully",
                Status = HttpStatusCode.OK
            };
        }

        /// <summary>
        /// Delete a file from an S3 bucket
        /// </summary>        
        /// <param name="subdir">sub directory of the file to be store</param>
        /// <param name="filename">name of the file</param>
        /// <returns></returns>
        public async Task<S3Response> DeleteFileAsync(string subdir, string filename)
        {
            if (string.IsNullOrEmpty(filename))
            {
                return new S3Response
                {
                    Message = "Filename is not provided.  No file to delete.",
                    Status = HttpStatusCode.OK
                };
            }

            try
            {
                //var bucketName = GetS3BucketUrl(subdir);
                var bucketName = _bucketName;

                //var key = string.Concat(_openBookerWebSetting.InstanceName, @"/" , subdir, @"/", filename);
                var key = string.Concat(_bucketName, @"/", filename);


                // Build the request with the bucket name and the keyName (name of the file)
                var request = new GetObjectRequest
                {
                    BucketName = bucketName,
                    Key = key
                };

                var toDelteobj = await _client.GetObjectAsync(request);

                if (toDelteobj != null)
                {
                    var deleteRequest = new DeleteObjectRequest
                    {
                        BucketName = bucketName,
                        Key = key
                    };
                    await _client.DeleteObjectAsync(deleteRequest);
                }

                return new S3Response
                {
                    Message = "The file was successfully deleted",
                    Status = HttpStatusCode.OK
                };
            }

            // Catch specific amazon errors
            catch (AmazonS3Exception e)
            {
                return new S3Response
                {
                    Message = e.Message,
                    Status = e.StatusCode
                };
            }

            // Catch other errors
            catch (Exception e)
            {
                return new S3Response
                {
                    Message = e.Message,
                    Status = HttpStatusCode.InternalServerError
                };
            }
        }

        //public string GetInstanceSubDir(string subdir)
        //{
        //    string instanceSubDir;
        //    if (string.IsNullOrEmpty(subdir))
        //    {
        //        //no subdirectory just instance name
        //        instanceSubDir = _openBookerWebSetting.InstanceName;
        //    }
        //    else
        //    {   // subdirectory and instance name  
        //        instanceSubDir = string.Concat(_openBookerWebSetting.InstanceName + @"/" + subdir);
        //    }

        //    return instanceSubDir;
        //}
    }
}
