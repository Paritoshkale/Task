// Create a function that calculates the area of a rectangle, where the height has a default value of 10 if not provided.

       const rectangle = (width,height = 10)=>{
                     return width * height;
        }
        console.log("area of a rectangle (10 , 5) is =", rectangle(10 , 5));
        console.log("area of a rectangle when height is defaulf (10) is =", rectangle(10));
