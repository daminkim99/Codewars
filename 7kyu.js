// 3.8.23

//1. Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels= ['a','e','i','o','u']
    let counter = 0;
    for (let i =0;i<str.length;i++){
      if (vowels.includes(str[i])){
        counter += 1
      }
    }return counter
  }

  //3.9.23

  //2.Write a function that takes a string and return a new string with all vowels removed.
  
  function disemvowel(str) {
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    let newStr=''
    for (i=0; i<str.length;i++){
      if(!vowels.includes(str[i])){
        newStr +=str[i]
      }
    }
    return newStr;
  }
  // or return str.replace(/[aeiou]/gi, '');

  //3. given a string of space separated numbers, and have to return the highest and lowest number.

  function highAndLow(numbers){
    let arrNum = numbers.split(' ')
    return `${Math.max(...arrNum)} ${Math.min(...arrNum)}`
  }

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
  