//3.19.23

//21. filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! \
//P: array of strings 
//R: array of strings with 4 letters in each string in a name 
//E:  ["Ryan", "Kieran", "Jason", "Yous"] =>  ["Ryan", "Yous"]

function friend(friends){
    //filter through the array and check the condition whether the length of each name is 4 
    return friends.filter(x => x.length==4)
  }

//22. Write a function that accepts fight string consists of only small letters and return who wins the fight. 
//When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case 
//return Let's fight again!.

//P: fight, string all lowercase 
//R: Let's fight again / Right side wins! / Left side wins! 
//E : 'z' -> 'Right side wins!'
//  'zdqmwpbs' -> 'Let's fight again!'

function alphabetWar(fight){
//create an object left and right 
const left = {
    w:4,
    p:3,
    b:2,
    s:1
}
const right = {
    m:4,
    q:3,
    d:2,
    z:1
}

let leftCount =0
let rightCount=0

//filter the string with corresponding sides 
fight = fight.split('')
let lettersL = fight.filter(x => x in left)
let lettersR = fight.filter(x => x in right)

// iterate through the string to add up points for each side 
leftCount = lettersL.reduce((count,item) => left[item] + count,0) 
rightCount = lettersR.reduce((count,item) => right[item] + count,0) 

//conditional to determine the winner comparing the points  
 if (leftCount > rightCount){
    return "Left side wins!"
 }else if (rightCount > leftCount){
    return "Right side wins!"
 } else {
    return "Let's fight again!";
}
}