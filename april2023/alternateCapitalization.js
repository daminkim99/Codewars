/* 4.14.23

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.


P: string of letters , lowercase , no spaces 
R: array of a word with odd letters capitalized, then same word but with even letters capitalized  
E: "abcdef" =>  ['AbCdEf', 'aBcDeF']

*/ 

function capitalize(s){
    //split into an array 
    let array =  s.split("")
    //capitalize even or odd letters using map and store it into variable 
    let even = array.map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join('')
    let odd = array.map((x,i) => i % 2 !== 0 ? x.toUpperCase(): x).join('')
    //return it in an array 
    return [even, odd]
  };