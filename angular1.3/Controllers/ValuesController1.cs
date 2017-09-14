using angular1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using angular1.Models;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace angular1

{
    public class ValuesController : ApiController
    {
        public static string connString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings[1].ConnectionString;
        }

        public class LoginData
        {
            public string UserName { get; set; }
            public string Password { get; set; }
        }
        public class ReturnLoginData
        {
            public int Id { get; set; }
            public int Loggedin { get; set; }
        }

        // GET api/<controller>
        public List<cars> Get()
        {
            var context = new Models.Model1();
            return context.cars.ToList();

        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public DataSet Post(LoginData value)
        {
            string connString = ValuesController.connString();
            using( SqlConnection connection = new SqlConnection(connString))
            {
                var adp = new SqlDataAdapter();
                SqlCommand cmd = new SqlCommand();
                connection.Open();

                cmd.CommandText = "dbo.SPlogin";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", value.UserName);
                cmd.Parameters.AddWithValue("@password", value.Password);
                cmd.Connection = connection;
                adp.SelectCommand = cmd;

                cmd.ExecuteNonQuery();
                var dataset = new System.Data.DataSet();
                var rows = adp.Fill(dataset);

                return dataset;

            }
            
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}