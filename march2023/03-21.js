//3.21.23

//24. Implement a function that accepts 3 integer values a, b, c. The function should 
//return true if a triangle can be built with the sides of given length and false in any other case.

//P: 3 integer values 
//R: true if area > 0 or false, two sides sum should always be greater than the remaining side 
//E: 7,2,2  -> False , 1,2,2 --> true 

function isTriangle(a,b,c){
    //check for the condition 
   if (a+b > c && b+c > a && a+c > b){
     return true
   } else {
     return false
   }
}


