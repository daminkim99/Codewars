/* 5.17.23 

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. 
The list is ordered according to who signed up first.


*/ 


function getFirstPython(list) {
    let result = list.filter((x) => x.language=="Python")
    if (result.length > 0){
      return `${result[0].firstName}, ${result[0].country}`
    }else {
      return "There will be no Python developers"
    }
  }