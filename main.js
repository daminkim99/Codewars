// 3.6.23

//1.Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b) => a-b)
      return args[0]
    }
  }

//2.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function(num) {
    let sum = 0
    for(let i =1; i <=num; i++) {
      sum += i
    }
    return sum
  }

//3.Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    const arr= x.split(' ')
    const noSpace = arr.join('')
    return noSpace
}

// 3.7.23

//4.Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  //create a new array that the value of true
  const filtered = arrayOfSheep.filter(x => x===true)
  return (filtered.length)
}
//or just return arrayOfSheep.filter(Boolean).length;

// 5.Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 cuz 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){
  return numbers.reduce((acc,c) => acc + (c**2),0)
}
//6. Make a simple function called greet that returns the most-famous "hello world!".

const greet = () => 'hello world!'

// 7. We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function(str){
  return Number(str);
}

// 8. he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time*0.5)
}