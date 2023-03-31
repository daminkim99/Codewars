/* 3.31.21 

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

P: array of strings elements  
R: array of string elements sorted by length 
E: ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]

*/ 

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length - b.length)
}