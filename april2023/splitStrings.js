/* 4.13.23 

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing
second character of the final pair with an underscore ('_').

P: a string of letters 
R: an array containing pairs of letters, if it's odd then last character should be returned by _  
E: * 'abc' =>  ['ab', 'c_']
*/ 

function solution(str){
    //count the letters in the string, if it's odd then add _ in the end 
    let strLength= str.length
    //create result
    let result=[]
    if (strLength%2 !== 0 ){
        str = str+ "_"
    }
    //loop through the string, and add the two letters 
    for(let i =0; i<str.length; i= i +2 ){
        result.push(`${str[i]}${str[i+1]}`)
    }
    return result
}