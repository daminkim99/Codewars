//3.10.23 

//4.  return the middle character of the word. If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

  function getMiddle(s){
    let middle = Math.floor(s.length / 2)
    if (s.length % 2 == 0){
      return s.slice(middle-1,middle+1)
    } else if (s.length % 2 == 1){
      return s[middle] 
    }
  }
//5. square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1. (81-1-1-81)

  function squareDigits(num){
  
    let arrStr = num.toString().split('')
    let arrSqred = arrStr.map(x => x*x)
    return Number(arrSqred.join(''))
  }
  