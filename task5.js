/ Given the object:
        // const user = { name: "Alice", age: 30, city: "New York" };
        // Extract the name and city properties using destructuring.

         const user = { Name: "Alice", age: 30, city: "New York" };

        const { Name, city } = user;
        console.log("User Name is",name); 
        console.log("User city is",city); 
