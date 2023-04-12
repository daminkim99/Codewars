/* 4.11.23 

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

P: a string of numbers 
R: a string of numbers repeated n times 
E: "312" => "333122"

*/ 

function explode(s) {
    //split the string into an array 
    let array = s.split('')
    let answer = ''
    //for each of the array, add to answer repeating element number of times 
    array.forEach(x => {
      answer += x.repeat(x)
    })
    //return the answer 
    return answer
  }