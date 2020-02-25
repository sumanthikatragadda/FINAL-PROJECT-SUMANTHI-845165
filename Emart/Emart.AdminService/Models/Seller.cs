﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Usename { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public string Gstin { get; set; }
        public string Briefaboutcompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string Contactnumber { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
