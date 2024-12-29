 // Q: Write code to:
        // 1. Create a Set with unique values from an array [1, 2, 2, 3, 4, 4].
        // 2. Create a Map that stores a fruit name as a key and its color as a value (e.g., apple -> red).

        const array = [1, 2, 2, 3, 4, 4];
        const uniqueValue = new Set(array);
        console.log(uniqueValue);


        const fruitMap = new Map();
        
        fruitMap.set('apple', 'red');
        fruitMap.set('banana', 'yellow');
        fruitMap.set('orange', 'orange');
        fruitMap.set('grape', 'purple');

        console.log(fruitMap);
