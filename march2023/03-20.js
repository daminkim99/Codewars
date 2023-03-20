//3.20.23

//23. An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//Complete the function to return true if the two arguments given are anagrams of 
//each other; return false otherwise.


//P: two , one that is a word and one that is a shuffle, strings  
//R: true or false , if they are anagram or not 
//E: 'foefet' => 'toffee'


// write the function isAnagram

var isAnagram = function(test, original) {
    //sort them alphabetically, with lowercase
    let arrTest= test.toLowerCase().split('').sort().join('')
    let arrOG= original.toLowerCase().split('').sort().join('')
    //return if the strings equal each other
    return arrTest === arrOG ? true:false
};
