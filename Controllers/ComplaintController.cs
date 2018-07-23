using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net;
using System.Web;
using CoolApp.Models;
using Newtonsoft;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoolApp.Controllers
{
  [Route("api/[controller]/[action]")]
  public class ComplaintController : Controller
  {
    ComplaintDAL complaintDAL = new ComplaintDAL();

    // GET: api/<controller>
    [HttpGet]
    public IEnumerable<Complaint> GetAllComplaints()
    {
        return complaintDAL.GetAllComplaints();
    }

    // GET api/<controller>/5
    [HttpPost]
    public Complaint GetComplaintById([FromBody] Complaint complaint)
    {
      return complaintDAL.GetComplaintById(complaint);
    }

    // POST api/<controller>
    [HttpPost]
    [ActionName("Post01")]
    public int Post01([FromBody] Complaint data)
    {
      return complaintDAL.SaveComplaint(data);
    }

    // PUT api/<controller>/5
    [HttpPost]
    public int UpdateComplaint([FromBody] Complaint data)
    {
      return complaintDAL.UpdateComplaint(data);
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
