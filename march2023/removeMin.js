/* 03.28.23 

Given an array of integers, remove the smallest value. Do not mutate the original array/list.

If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

P: array of numbers
R: array of numbers without the lowest number 
E: Input: [1,2,3,4,5], output = [2,3,4,5]
   Input: [5,3,2,1,4], output = [5,3,2,4]

*/ 

function removeSmallest(numbers) {
    //finds the minimum number in an array
    let minNumb= Math.min(...numbers)
    //finds the index of the first smallest number in the array 
    let minIndex= numbers.indexOf(minNumb)
    //make a copy of the og array 
    let numbersC = numbers.slice()
    //delete that item 
    numbersC.splice(minIndex, 1)
    return numbersC

  }