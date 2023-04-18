/* 4.17.23 

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
occur more than once in the input string. The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

P: a string of numbers or letters both uppercase and lowercase 
R: returns a value of how many letters are repeated 
E :"abcde" -> 0
    "aabbcde" -> 2 
*/

function duplicateCount(text){
    //convert the string to an array 
    let textArr = text.toLowerCase().split('')
    //create an object with distinct letters/numbers in the word and have count as the value 
    let objects = textArr.reduce((count, element) => {
      count[element] ? count[element] +=1 : count[element] = 1
      return count
    },{})
    //returns keys that have values that have more than 1 and the length of the keys 
    return Object.keys(objects).filter(key => objects[key] > 1).length
  }
  
