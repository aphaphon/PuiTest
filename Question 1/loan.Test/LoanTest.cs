using System;
using Xunit;

namespace loan.Test
{
    public class LoanTest
    {
        [Theory]
        [InlineData(10000, 12, 11200)]
        [InlineData(11200, 12, 12544)]
        [InlineData(12544, 12, 14049.28)]
        public void CalculateRate(double inputMoney, int inputRate, double expected)
        {
            var sut = new LoanLogic();
            var result = sut.LoanCalculate(inputMoney, inputRate);
            Assert.Equal(expected, result);
        }
    }
}
