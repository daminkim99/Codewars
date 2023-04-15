/* 4.14.23

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

P: array of numbers 
R: returns the biggest number 
E: [1, 10, 100] =>  100
*/

function findLongest(array){
//to keep the largest string 
    let largest = 0;
//loop through the array and compare the string length 
    for(let i = 0; i < array.length; i++) {
        if(array[i].toString().length > largest.toString().length) {
            largest = array[i];
        }
    }  
  return largest;
}
  