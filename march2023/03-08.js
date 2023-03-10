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