using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shopapi.Models;

namespace shopapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private static List<ProductOrder> productOrders = new List<ProductOrder>();
        private static int Count = 1;

        [HttpPost]
        public void Post([FromBody] ProductOrder productOrder)
        {
            productOrder.OrderId = $"Order{Count++}";
            productOrder.Name = productOrder.Name;
            productOrder.TotalAmount = productOrder.Price * productOrder.Amount;
            productOrder.Discount = CalculateDiscount(productOrder.Amount, productOrder.Price);
            productOrders.Add(productOrder);
        }

        [HttpGet]
        public ActionResult<AllProduct> Get()
        {
            int sumTotal = 0;
            int sumDis = 0;
            for (int i = 0; i < productOrders.Count; i++)
            {
                sumTotal += productOrders[i].TotalAmount;
                sumDis += productOrders[i].Discount;
            }
            var allTotal = sumTotal;
            var dis = sumDis;
            var pay = allTotal - dis;

            var avg = new AllProduct
            {
                AllProducts = productOrders,
                Alltotal = allTotal,
                Discount = dis,
                Pay = pay,
            };
            return avg;
        }

        private int CalculateDiscount(int Amount, int Price)
        {
            return (Amount / 4) * Price;
        }


    }
}
