/* 4.20.23 

The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

P: string
R: return string of (s or )s depending on number of occurences of a letter in a string 
E: "din"      =>  "((("
   "recede"   =>  "()()()"

*/

function duplicateEncode(word){
    //lowercase the string to make it case insensitive,then make it into an array  
    let arrWord = word.toLowerCase().split('')
    //counter to check how many letters appear throughout the string 
    let count = {}
    //update the count object with number of occurences in a letter 
    arrWord.forEach((x) => x in count? count[x]+= 1 : count[x] = 1 )
    //check the number of occurences and return accordingly, then join the array into the string 
    return arrWord.map(x => count[x]===1 ? '(' : ')' ).join('')
    
}

