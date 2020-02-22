﻿using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public interface ITransactionRepository
    {
        public void BuyItem(PurchaseHistory item);
        List<PurchaseHistory> TransactionHistory(int id);
    }
}
