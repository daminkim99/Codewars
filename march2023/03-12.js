//3.12.23 

// 9. reate a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter (x => typeof(x) == 'number')
  }

//10. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    str = str.toLowerCase()
    let counterx = 0
    let countero = 0 
    for (let i=0; i <str.length ; i++){
      if (str[i] =='o'){
        countero +=1
      } else if (str[i] == 'x')
        counterx +=1 
    }  return countero ==counterx ? true:false 
}  
// const arr = str.toLowerCase().split('')
// return arr.filter(x => x=='x').length === arr.filter(o => o=='o').length

//11. Convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
  };
  