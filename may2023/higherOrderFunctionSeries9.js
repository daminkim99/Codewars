/* 5.23.23 

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend 
the next coding meetup that you are organising.
return 

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.

*/ 

function isAgeDiverse(list) {
    //age to compare to the developers
    let age = [10,20,30,40,50,60,70,80,90,100]
    //loop through the array, and check of they are between the age range 
    for (let i=0 ; i < age.length-1 ; i++){
    //if none fall in the age range , then return false 
      if ( !list.some(x => age[i] <= x.age  && x.age < age[i+1])){
        return false 
      }
      //check if any have age greater than 100 
      if (!list.some(x => x.age >= age[age.length - 1])) {
      return false;
      }
      }
      return true
    
    }