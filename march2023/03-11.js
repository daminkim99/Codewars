//3.11.2023 7kyu codewars 

//6. Given an integral number, determine if it's a square number
 var isSquare = n => Number.isInteger(Math.sqrt(n))


 //7. function that can take any non-negative integer as an argument and return it with its digits in descending order. 
 
 function descendingOrder(n){
    arrN= n.toString().split('')
    return Number(arrN.sort((a,b) => b-a).join(''))
  }

//8. Implement a function that determines whether a string that contains only letters is an isogram. 
  function isIsogram(str){
    str = str.toLowerCase()
    let compareStr = ''
    for (let i = 0 ; i< str.length; i++){
      if (str[i]=== ''){
          return true
      } else if(!compareStr.includes(str[i])){
        compareStr +=str[i]
      }
    }
    return compareStr == str? true:false
  }