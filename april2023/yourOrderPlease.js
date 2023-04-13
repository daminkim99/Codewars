/* 4.12.23 
Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers.

P: string of a sentence including number in each word 
R: return the sorted order in which the numbrs are in ascending order 
E: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

*/

function order(words){
    //splits it into an array 
    let array = words.split(' ')
    //create a variable to put result 
    let result = ''
    //iterate through each of the element in the array and see if it is a match, then add it to the result 
    for(let i =1; i <= array.length; i++){
      for(let element of array){
        if (element.includes(i)){
          result += element + ' ' 
        }
      }
    }
    return result.trim()
  }