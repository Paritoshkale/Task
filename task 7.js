  //    const numbers = [1, 2, 3, 4, 5];
        //    1. Use map to create a new array where each number is doubled.
        //    2. Use filter to create a new array with only the even numbers.

        const number = [1, 2, 3, 4, 5];
        const double = number.map((val) => {
            return val * 2;
        })
        console.log(double);

        const even = number.filter((val) => {
            return val % 2 === 0;
        })
        console.log(even);
