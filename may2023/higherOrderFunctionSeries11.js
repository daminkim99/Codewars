/* 5.26.23 

write a function that returns the average age of developers (rounded to the nearest integer). 
*/ 

function getAverageAge(list) {
  //collect the sum of the ages of the people attending , then divide by the number of people attending
  let avgAge = list.reduce((count, person) => person.age + count, 0) / list.length
  //return the average of the age rounded to its nearest integer 
  return Math.round(avgAge)
  
}