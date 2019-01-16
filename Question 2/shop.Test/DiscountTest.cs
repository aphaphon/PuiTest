using System;
using loan.Test;
using Xunit;

namespace shop.Test
{
    public class DiscountTest
    {
        [Theory]
        [InlineData(600, 4, 600)]
        [InlineData(600, 8, 1200)]
        [InlineData(600, 11, 1200)]
        public void DiscountCalculate(int inputPrice, int inputAmount, double expected)
        {
            var sut = new DiscountLogic();
            var result = sut.DiscountCalculate(inputAmount, inputPrice);
            Assert.Equal(expected, result);
        }
    }
}
