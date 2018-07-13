using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoolApp.Models
{
    public class Complaint
    {
      public Int64 id { get; set; }
      public string name { get; set; }
      public string email { get; set; }
      public Int64 mobile { get; set; }
      public string reqsub { get; set; }
      public string reqmessage { get; set; }
    }
}
