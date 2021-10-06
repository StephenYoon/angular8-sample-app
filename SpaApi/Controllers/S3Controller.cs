using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpaApi.Helpers;

namespace SpaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class S3Controller : ControllerBase
    {
        private IS3Service _s3Service;

        public S3Controller(IS3Service s3Service)
        {
            _s3Service = new S3Service();
        }

        // GET: api/S3
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/S3/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/S3
        //[HttpPost]
        [HttpGet]
        public async Task<JsonResult> UploadProfilePhoto()
        {
            var fullFilePath = @"D:\Users\yooni\Pictures\Hoverboard.PNG";
            var foo = await _s3Service.UploadFileAsync("", fullFilePath);
            JsonResult response = new JsonResult(new Object());

            return response;
        }

        // PUT: api/S3/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
