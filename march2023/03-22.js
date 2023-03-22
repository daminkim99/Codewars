//03.22.23

//25. Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//P: url , string 
//R: string without anything after # 
//E: "www.codewars.com#about" --> "www.codewars.com"

function removeUrlAnchor(url){

//search for string that has # 
const index= url.search('#')
//if it returns -1, meaning no search, then return url
if (index == -1){
    return url
//else, return part of the url
} else {
    return url.slice(0,index)
}
}
//or just return .split(#).[0]

// 26. Given a mixed array of number and string representations of integers, add up the non-string integers
// and subtract the total of the string integers.

//P: array of either int or str numbers 
//R: number of addition/subtraction
//E: [9, 3, '7', '3']) => 2
function divCon(x){
    //adds/subtracts the counter depending on the item types and returns the value
    return x.reduce((counter,item) => typeof(item)==='string' ? counter-Number(item):counter +item,0)
        
  }
  


