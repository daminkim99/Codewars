// 3.6.23

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b) => a-b)
      return args[0]
    }
  }

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function(num) {
    let sum = 0
    for(let i =1; i <=num; i++) {
      sum += i
    }
    return sum
  }

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    const arr= x.split(' ')
    const noSpace = arr.join('')
    return noSpace
}