/* 5.16.23

You will be given an array of objects (associative arrays in PHP)
representing data about developers who have signed up to attend the next coding meetup that you are organising.

list of objects 
returns true if there are at least one ruby developer , false otherwase 


*/ 

function isRubyComing(list) {
    //uses the some method in the array to return true
    return list.some(x => x.language ==="Ruby")
  }



