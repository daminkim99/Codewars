//3.15.23 

//15. Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let arrLength = s.split(' ').map(x => x.length)
    return Math.min(...arrLength)
  }

//16. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    let length= ending.length
    if (length ===0){ 
      return true;
    }
    return (ending ===str.slice(-length)) 
  }
  //str.endsWith(ending)