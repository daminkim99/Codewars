/* 03.29.23 

Your task is to find all the elements of an array that are non consecutive.

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number>
 and n: <the non-consecutive number>.

P: array of numbers 
R: array with objects with properties i , n each with value index and number itself consecutively
E: [1,2,3,4,6,7,8,15,16] =>  [
                                 {i: 4, n:6},
                                {i: 7, n:16}
                            ]

 */ 

function allNonConsecutive (arr) {
    let answer= []
    for (let i =0 ; i<arr.length-1; i++){
        //if the next number in an array is not greater by one, append it into the answer 
        if((arr[i]+1)!==arr[i+1]){
          console.log(i+1, arr[i+1])
            answer.push({i:i+1,n:arr[i+1]})
        }
    }
    return answer
}