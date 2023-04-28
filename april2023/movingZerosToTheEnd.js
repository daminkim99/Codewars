/* 4.27.23 

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

P: array 
R: same array as parameter but zeros moved to the end of the array 
E: [false,1,0,1,2,0,1,3,"a"] => [false,1,1,2,1,3,"a",0,0]

*/ 


function moveZeros(arr) {
 //finds the number of zeros and put it into an array 
 //create a new array with 0 filtered out, and return the array combined 
  let count = []
  arr.forEach(x => x === 0 && count.push(x))
  let newArr= arr.filter((x) => x !== 0)
  
  return newArr.concat(count)
}