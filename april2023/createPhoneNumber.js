/* 4.10.23

Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

P: array of numbers 
R: number returned in a format of "(xxx) xxx-xxxx"
E : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/ 

function createPhoneNumber(numbers){
  //create a format that you can replace into 
  let format = '(xxx) xxx-xxxx'
  //loop through the format, and anywhere with an x, replace it with the array
  for (let i = 0; i < numbers.length; i++){
    format = format.replace('x',numbers[i]);
  }
  return format
}