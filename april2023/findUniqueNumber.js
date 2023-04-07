/* 4.6.23 

There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

P: array of numbers 
R: the only number that is different than the others 
E: [ 1, 1, 1, 2, 1, 1 ] === 2
   [ 0, 0, 0.55, 0, 0 ] === 0.55

*/ 

function findUniq(arr) {
    //sort the array 

    arr.sort((a,b) => a-b)
    //if the first element in the array equals the second element in the array, unique number is at the end, 
    // if not, then return the first unique element in the array  
    return arr[0] ===arr[1] ? arr.pop(): arr[0] 
}