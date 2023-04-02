/* 4.2.23 

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

P: two numbers a, b 
R: returns a sum of all the numbers inbtw a and b 
E: (1, 0) --> 1 (1 + 0 = 1)
   (1, 1) --> 1 (1 since both are same)

*/ 

function getSum(a, b){
   //create a varaible for sum 
    let sum=0
    //if the a and b are same, return one 
    if (a==b){
    return a
   } 
   //find the max and the min between the two values inputted 
   const max = Math.max(a,b)
   const min = Math.min(a,b)
   //loop through to add all the numbers 
   for (let i =min; i<=max; i++){
    sum += i
   }
   return sum
}