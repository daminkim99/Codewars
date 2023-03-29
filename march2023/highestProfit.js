/* 03.29.23

Write a function that returns both the minimum and maximum number of the given list/array.

P: array of numbers 
R: return maximum and minimum value in an array 
E: 
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/

function minMax(arr){
    //uses max and min functions from the array to find out the min and max 
    return [Math.min(arr),Math.max(arr)]
  }