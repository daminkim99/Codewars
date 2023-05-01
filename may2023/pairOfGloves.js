/* 5.1.23 

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

P: array of colors string 
R: total pairs of gloves you can make 
E: ["red", "green", "red", "blue", "blue"] => 2 

*/

function numberOfPairs(gloves){
//create a count to count the number of occurences of the same gloves 
  let count={}
  //array of the results to keep which gloves can make how many pairs 
  result= []
  //make count 
  gloves.forEach( item => item in count ? count[item]+= 1 : count[item]=1 )
 //make the pairs of gloves 
  for (let element in count){ count[element] > 1 && result.push(Math.floor(count[element]/2)) }
  //add up all the pairs of gloves in an array 
  return result.reduce((sum,element) => sum + element,0)
}