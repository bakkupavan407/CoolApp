using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using CoolApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoolApp.Models
{
  public class ComplaintDAL
  {
    string connectionstr = "Data Source=BAKKUPAVAN;Initial Catalog=ggblog;Integrated Security=True;MultipleActiveResultSets=true;";
    
    public int SaveComplaint(Complaint complaint)
    {
      try
      {
        using (SqlConnection con = new SqlConnection(connectionstr))
        {
          SqlCommand cmd = new SqlCommand("SP_INSERT_REQUEST", con);
          cmd.CommandType = CommandType.StoredProcedure;

          cmd.Parameters.AddWithValue("@name", complaint.name);
          cmd.Parameters.AddWithValue("@email", complaint.email);
          cmd.Parameters.AddWithValue("@mobileno", complaint.mobile);
          cmd.Parameters.AddWithValue("@reqsubject", complaint.reqsub);
          cmd.Parameters.AddWithValue("@reqmessage", complaint.reqmessage);

          if (cmd.Connection.State == ConnectionState.Closed)
          {
            cmd.Connection.Open();
          }
          cmd.ExecuteNonQuery();
          con.Close();
        }
        return 1;
      }
      catch
      {
        return 0;
      }
    }

    public Complaint GetComplaintById(Complaint getcomp)
    {
      try
      {
        Complaint complaint = new Complaint();
        using (SqlConnection con = new SqlConnection(connectionstr))
        {
            SqlCommand cmd = new SqlCommand("SP_GET_REQUEST_BY_ID", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@cid", getcomp.id);

            if (cmd.Connection.State == ConnectionState.Closed)
            {
              cmd.Connection.Open();
            }
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
              complaint.id = Convert.ToInt64(rdr["ID"]);
              complaint.name = rdr["Name"].ToString();
              complaint.email = rdr["Email"].ToString();
              complaint.mobile = Convert.ToInt64(rdr["MobileNo"]);
              complaint.reqsub = rdr["ReqSubject"].ToString();
              complaint.reqmessage = rdr["ReqMessage"].ToString();
            }
        }
        return complaint;
      }
      catch
      {
        throw;
      }
    }

    public IEnumerable<Complaint> GetAllComplaints()
    {
      try
      {
        List<Complaint> listRequests = new List<Complaint>();

        using (SqlConnection con = new SqlConnection(connectionstr))
        {
          SqlCommand cmd = new SqlCommand("SP_GET_ALL_REQUEST", con);
          cmd.CommandType = CommandType.StoredProcedure;

          if (cmd.Connection.State == ConnectionState.Closed)
          {
            cmd.Connection.Open();
          }
          SqlDataReader rdr = cmd.ExecuteReader();

          while (rdr.Read())
          {
            Complaint complaint = new Complaint();
            complaint.id = Convert.ToInt64(rdr["ID"]);
            complaint.name = rdr["Name"].ToString();
            complaint.email = rdr["Email"].ToString();
            complaint.mobile = Convert.ToInt64(rdr["MobileNo"]);
            complaint.reqsub = rdr["ReqSubject"].ToString();
            complaint.reqmessage = rdr["ReqMessage"].ToString();
            complaint.reqstatus = rdr["ReqStatus"].ToString();
            complaint.admincoms = rdr["AdminComms"].ToString();
            complaint.date = rdr["DateCreated"].ToString();
            complaint.updatedat = rdr["UpdateAt"].ToString();
            listRequests.Add(complaint);
          }
          con.Close();
        }
        return listRequests;
      }
      catch
      {
        throw;
      }
    }

    public int UpdateComplaint(Complaint complaint)
    {
      try
      {
        using (SqlConnection con = new SqlConnection(connectionstr))
        {
          SqlCommand cmd = new SqlCommand("SP_UPDATE_REQUEST", con);
          cmd.CommandType = CommandType.StoredProcedure;

          cmd.Parameters.AddWithValue("@id", complaint.id);
          cmd.Parameters.AddWithValue("@admincomms", complaint.admincoms);
          // cmd.Parameters.AddWithValue("@reqstatus", complaint.reqstatus);

          if (cmd.Connection.State == ConnectionState.Closed)
          {
            cmd.Connection.Open();
          }
          cmd.ExecuteNonQuery();
          con.Close();
        }
        return 1;
      }
      catch
      {
        return 0;
      }
    }
  }
}
