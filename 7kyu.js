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