/* 03.24.23

28. Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string. 

P: string, mixed capitals 
R: return array including indexes of capitals
E: 'CodEWaRs' => [0,3,4,6]
*/

var capitals = function (word) {
    let answer = []
    //loop through to get index
    for (let i=0; i<word.length;i++){
        if (word[i]==word[i].toUpperCase()){
            //append it to a new array
            answer.push(i)
        }
    }
    return answer
};