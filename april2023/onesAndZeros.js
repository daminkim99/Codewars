/* 4.4.23

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

P: an array of ones and zeros 
R: the equivalent binary vlue to an integer 
E: [0, 1, 1, 0] ==> 6
*/ 

const binaryArrayToNumber = arr => {
    //reverse the array so we can use the index in the formula for converting it to base ten 
    let reversed = arr.reverse()
    //use reduce method to usethe 2^index * item formula 
    let sum = reversed.reduce((counter,item,index) => {
      return counter += ((2**(index)) * item)
    },0)
    return sum
  };




