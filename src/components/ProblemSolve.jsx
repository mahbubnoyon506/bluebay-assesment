import React from 'react';

const ProblemSolve = () => {

    // problem 1
    function findMaxProfitDays(stockPrices) {
        let minPrice = stockPrices[0];
        let maxProfit = 0;
        let buyDay = 0;
        let sellDay = 0;

        for (let i = 1; i < stockPrices.length; i++) {
            let currentPrice = stockPrices[i];

            if (currentPrice < minPrice) {
                minPrice = currentPrice;
                buyDay = i;
            }

            let potentialProfit = currentPrice - minPrice;

            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
                sellDay = i;
            }
        }

        return [buyDay, sellDay];
    }

    const prices1 = [345, 556, 330, 455, 590, 490, 310, 450];
    const prices2 = [4, 2, 5, 6, 3, 2, 8, 9, 1, 4, 6, 8];
    const prices3 = [4000, 2000, 1000, 5000, 2000, 3000, 9000, 8000, 1000];

    const maxProfitDays1 = findMaxProfitDays(prices1);
    const maxProfitDays2 = findMaxProfitDays(prices2);
    const maxProfitDays3 = findMaxProfitDays(prices3);

    // Problem 2
    function calculateGPA(bangla, english, math, science, economy) {
        const totalMarks = bangla + english + math + science + economy;
        const averageMarks = totalMarks / 5;

        if (averageMarks >= 80) {
            return `Passed: GPA 5.0`;
        } else if (averageMarks >= 70 && averageMarks < 80) {
            return `Passed: GPA 4.0`;
        } else if (averageMarks >= 60 && averageMarks < 70) {
            return `Passed: GPA 3.0`;
        } else if (averageMarks >= 50 && averageMarks < 60) {
            return `Passed: GPA 2.0`;
        } else if (averageMarks >= 40 && averageMarks < 50) {
            return `Passed: GPA 1.0`;
        } else {
            return `Failed: GPA 0.0`;
        }
    }

    const student1 = calculateGPA(76, 88, 91, 78, 61);
    const student2 = calculateGPA(44, 38, 50, 49, 51);


    return (
        <div className='px-20 py-10'>
            <div className='my-5 border p-5 border-indigo-800'>
                <h2 className='text-2xl font-semibold text-slate-900'>Problem 1 solution:</h2>
                <p>If the data is like this,</p>
                <ul className='ml-16'>
                    <li>Price 1: [345, 556, 330, 455, 590, 490, 310, 450],</li>
                    <li>Price 2: [4, 2, 5, 6, 3, 2, 8, 9, 1, 4, 6, 8],</li>
                    <li>Price 3: [4000, 2000, 1000, 5000, 2000, 3000, 9000, 8000, 1000]</li>
                </ul>
                <p>The expected result is:-</p>
                <p>Max profit for prices1: Buy on day {maxProfitDays1[0]} and sell on day {maxProfitDays1[1]}</p>
                <p>Max profit for prices2: Buy on day {maxProfitDays2[0]} and sell on day {maxProfitDays2[1]}</p>
                <p>Max profit for prices3: Buy on day {maxProfitDays3[0]} and sell on day {maxProfitDays3[1]}</p>
            </div>
            <div className=' border p-5 border-indigo-800'>
                <h2 className='text-2xl font-semibold text-slate-900'>Problem 2 solution</h2>
                <p>If the data is like this: </p>
                <div className='flex items-center'>
                 <ul className='ml-16 mr-5'>
                    <li>1. Bangla: 76,</li>
                    <li>2. English: 88,</li>
                    <li>3. Math: 91,</li>
                    <li>4. Science: 78,</li>
                    <li>5. Economy: 61</li>
                 </ul>

                 <ul className='ml-16'>
                    <li>1. Bangla: 44,</li>
                    <li>2. English: 38,</li>
                    <li>3. Math: 50,</li>
                    <li>4. Science: 49,</li>
                    <li>5. Economy: 51</li>
                 </ul>
                </div>
                <p>The expected result is:-</p>
                <p>Student One: {student1}</p>
                <p>Student Two: {student2} </p>
            </div>
        </div>
    );
};

export default ProblemSolve;