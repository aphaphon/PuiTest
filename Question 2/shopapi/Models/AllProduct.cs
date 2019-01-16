using System.Collections.Generic;

namespace shopapi.Models
{
    public class AllProduct
    {
        public List<ProductOrder> AllProducts { get; set; }
        public int Alltotal { get; set; }
        public int Discount { get; set; }
        public int Pay { get; set; }


    }
}