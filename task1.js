// What's the difference between let and const? Write code that demonstrates their behavior in a block scope.

    /*  1) let -   let allows you to reassign a variable after it's been declared.
        2) const - const does not allow you to reassign a variable after it's been declared.*/
          
        let x = 10;
        console.log("value of x using let =",x); // Output: 10

        x = 20;
        console.log("value of x =",x); // Output: 20

        const y = 10;
        console.log("value of y using const =",y); // Output: 10

       // y = 20;          //Output = Uncaught TypeError: Assignment to constant variable.
