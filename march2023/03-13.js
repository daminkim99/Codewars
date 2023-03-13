//3.13.23 

//12. That accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    return (str.split(' ').map(x => x.split('').reverse().join(''))).join(' ')
  }

// 13.Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  
function longest(s1, s2) {
    let strAB = s1+s2
    let arrAB = strAB.split('')
    let newArr = []
    let filteredAB = arrAB.filter(x => {
      if (!newArr.includes(x)){
        newArr.push(x)
        return true;
      }else {
        return false;
      }})
    return newArr.sort().join('')
  }