namespace loan.Test
{
    public class LoanLogic
    {
        public double LoanCalculate(double inputMoney, double inputInterest)
        {
            var calRate = inputMoney * inputInterest / 100;
            var result = inputMoney + calRate;
            return result;
        }
    }
}