/* 4.3.23 

You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive 
strings taken in the array.

P: two parameters, one with an array of strings , and k defining the length
of how many words to concatenate 
R: the longest word concatenated

E:["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) 
--> "abigailtheta"

**
n being the length of the string array, if n = 0 or k > n or k <= 0 return ""
(return Nothing in Elm, "nothing" in Erlang).
**

*/ 

function longestConsec(strarr, k) {
 //condition with length of the array =0 , or k being greater than the length , or less than 0 
 const arrLength= strarr.length
 if (arrLength ==0 || k > arrLength || k <= 0) return ""

 let result=''
//iterate through the array 
 for (let j = 0; j <= arrLength-k; j++){

    let str=''
    for (let i = j; i < j+k ; i++){
        str+=strarr[i]   
    }
    //if the new string is longer than the one before , replace it 
    if (result.length <str.length ){
        result=str;
 }
}
return result;

}