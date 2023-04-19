/* 4.18.23

Complete the method/function so that it converts 
dash/underscore delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized (known as Upper Camel
Case, also often referred to as Pascal case). The next words should be always 
capitalized.

P: string of words that have delimiters - or _ 
P: returns string camelcase of the word without delimiters 
E: "the-stealth-warrior" -> "theStealthWarrior"
    "The_Stealth_Warrior" -> "TheStealthWarrior"
*/ 

function toCamelCase(str){
    //first iterate through the string to splice delimiters to spaces 
    let word = str.split('')
    //filter out the delimiter with spaces 
    let result = word.map((x,i) => {
      if (x== "-" || x=="_"){
          return " "
      } else {
          return x 
      }
    }) 
    //return the result with camelCasing , then join the array back to a string 
    return result.join('').split(' ').map((x,i) => i == 0 ? x : x[0].toUpperCase()+x.substring(1)).join('')
  
  }