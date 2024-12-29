 // 1. Combines two arrays [1, 2, 3] and [4, 5, 6] into one array using the spread operator.
        // 2. Uses the rest operator to collect arguments passed to a function into an array.

        arr1 = [1, 2, 3];
        arr2 = [4, 5, 6];

        const combine = [...arr1 , ...arr2];
        console.log("2 combine array is = " , combine)


        function functionIntoArray(...Args) {
        console.log(Args);
        }

        functionIntoArray(1, 2, 3, 4, 5);  
        functionIntoArray("apple","banana","Mango","cherry","Orange"); 
