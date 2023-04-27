/* 4.26.23

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/ 

function high(x){
    //make an alphabet of arrays to compare the points to 
    const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split('')
    //make an array of input 
    let arrInput = x.split(' ')
    //place to put max score and the correspoinding word 
    let score = 0
    let highWord = ''
    //counts the letter points and if the score for the word is higher than switch it 
   for (let word of arrInput) {
       let letterScore = 0;
     
      for (let letter of word) {
         letterScore += arrAlpha.indexOf(letter) + 1;
       }
       
       if (letterScore > score) {
         score = letterScore;
         highWord = word;
       }
     }
     return highWord
     
   }
   