/* 4.19.23 

Write a function that takes in a string of one or more words, and returns the same 
string, but with all five or more letter words reversed (Just like the name of this 
Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

P: string of words 
R: string of words but if word has more than five letters , they are reversed 
E: "Hey fellow warriors" -> "Hey wollef sroirraw" 
*/

function spinWords(string){
  //convert it into an array 
    let strArr = string.split(' ')
  //map through the array, if the word length is > 5, then reverse the string 
  return strArr.map((x,i) => x.length >=5 ? x.split('').reverse().join('') : x).join(' ')
}