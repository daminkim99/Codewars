/* 5.28.23 

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

*/

function orderFood(list) {
    return list.reduce((c, item) => {
      c[item.meal] = c[item.meal] ? c[item.meal] + 1 :  1
      return c
    },{})
  }