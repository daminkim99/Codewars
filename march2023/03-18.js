//3.17.23 

//20. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.

//P: arr of number , no float, all + 
//R: returns number, sum of two lowest 
//E: [19,5,42,2,77] -> 7 
//   [10,343445353,3453445,3453545353453] -> 3453455

function sumTwoSmallestNumbers(numbers) {  
    
    //sort the array from smallest to largest numbers in the array 
    let sorted = numbers.sort((a,b) => a-b)
    //return the sum of the first two elements in the array, which are the smallest 
    return (sorted[0] + sorted[1])
    }

//21. Write a function which returns the sum of a sequence of integers.
//The sequence is defined by 3 non-negative values: begin, end, step.

//P : begin, end, step , all non negative 
//R: sum of all the sequence of integers 
//E: 2, 2 ,2 -> 2 
//  2, 6, 2 -> 12 
//  5, 1, 1 -> 0 

const sequenceSum = (begin, end, step) => {
    //create a sum variable 
    let sum = 0
    } //make a for loop to iterate through the sequence 
    for (let i = begin; i <= end; i= i + step ){
        sum += i 
        }
    return sum
