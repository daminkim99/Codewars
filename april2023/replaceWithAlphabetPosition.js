/* 4.16.23

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

P: a string of letters
R: returns the replaced letter with its position in the alphabet in a string, separated by spaces 
E: "The sunset sets at twelve o' clock." => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/

function alphabetPosition(text) {
    //make it into an array 
    let arrayText = text.split('')
    //check to see if the letter is an alphabet and return only the array with the letters 
    let alphabets = arrayText.filter((x,i) => {
        return (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) || (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <=90)
    })
    //iterate through to convert the alphabet into numbers 
    let answer= alphabets.map(x => {
        if(x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122){
          return x.charCodeAt(0)-96
        }else {
           return x.charCodeAt(0)-64
        }
    })
    //bring it back to the string and return the answer
    return answer.join(' ')
  }