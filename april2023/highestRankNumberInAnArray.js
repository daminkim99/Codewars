/* 4.28.23 

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

//P: array of numbers 
//R: most frequent number, if it's a tie 
//E: [12, 10, 8, 12, 7, 6, 4, 10, 12]  -->  12

*/

function highestRank(arr) {
  let count = {};
  let freqNum = 0;
  let result = [];
  //loop through each element in the array and increment each one if the element exists in the object
  arr.forEach((x) => {
    if (count[x]) {
      count[x] += 1;
    } else {
      count[x] = 1;
    }
  });
  //loop through the count, replace the max value and the corresponding number
  for (let element in count) {
    if (freqNum < count[element]) {
      freqNum = count[element];
      result = [element];
    } else if (freqNum === count[element]) {
      freqNum = count[element];
      result.push(element);
    }
  }
  //if the result has one length then return that , if more than two numbers, then return the greatest
  return result.length === 1 ? +result[0] : +Math.max(...result);
}
