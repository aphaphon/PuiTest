namespace loan.Test
{
    public class DiscountLogic
    {
        public int DiscountCalculate(int inputAmount, int inputPrice)
        {
            return (inputAmount / 4) * inputPrice;
        }
    }
}