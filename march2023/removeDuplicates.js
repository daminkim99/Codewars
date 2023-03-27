/* 03.26.23 

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

P: string of words 
R: one string with no repeats 
E: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' -> alpha beta gamma delta'alpha beta gamma delta'
*/
function removeDuplicateWords (s) {
    //split it into an array of words 
      let arrS= s.split(' ')
      let sorted=[]
    //filter so that only the words that don't exist in an array is returned 
     for (let i =0; i<arrS.length; i++){
       if (!sorted.includes(arrS[i])){
         sorted.push(arrS[i])
       }
     }
    return sorted.join(' ')
  }
