/* 5.21.23 

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same 
order as they appeared in the original input array.
*/


function findSenior(list) {
    //sorts the list from oldest to youngest 
  list.sort((a, b) => b.age - a.age)
  //filters out only the list that has same oldest age 
  let answer = list.filter(x => list[0].age === x.age)
  //returns the list 
  return answer
}