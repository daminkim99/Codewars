/* 3.30.23 

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.


P: input of string 
R: array of sorted words in alphabetical order of the last char 
E  : 'man i need a taxi up to ubud' -> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

*/ 

function last(x){
//make the string into an array of words
let arrStr = x.split(' ')

//sort the array by the last character 
return arrStr.sort((a,b) => {
    if ((a.charAt(a.length-1) > b.charAt(b.length-1))){
        return 1
    }else if ((a.charAt(a.length-1) == b.charAt(b.length-1))){
        return 0
    } else {
        return -1
    }
})
    
}