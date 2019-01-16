using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using loanapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace loanapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private static List<Loan> loans = new List<Loan>();
        private static int Counts = 1;

        [HttpPost]
        public void Post([FromBody] Loan loan)
        {
            loan.Count = Counts++;
            loan.Balance = loan.Balance;
            loan.InterestRate = loan.InterestRate;
            loan.InterestRate = loan.Balance * loan.InterestRate / 100;
            loan.Payment = loan.Balance + loan.InterestRate;
            loans.Add(loan);
        }

        [HttpGet]
        public IEnumerable<Loan> Get()
        {
            return loans;
        }
    }
}