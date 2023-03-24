/* 03.23.23

29. When provided with a string, capitalize all vowels

P: string
R: return string with vowels capitalized
E: "Hello World!" -> "HEllO WOrld!"

*/

function swap (string) {
    //create an array with vowels 
    const vowels=['a','e','i','o','u']
    //switch lowercase value with uppercase using replace
    for (let i = 0 ; i < string.length; i++ ){
        if (vowels.includes(string[i])) string = string[i].replace(string[i],string[i].toUpperCase())
    }
   return string
  }