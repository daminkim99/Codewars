/* 5.14.23

You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

input a list of objects
outputs the number of objects that come from europe and are JS developers 

*/ 

function countDevelopers(list) {
    return list.filter((x,i) => x.continent === "Europe" && x.language ==="JavaScript").length
  }

  