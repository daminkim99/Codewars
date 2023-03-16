//3.16.23 

//17. This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
	let arr= s.split('')
  let letters = arr.map((x,i) => {
   return x.toUpperCase() + x.repeat(i).toLowerCase()
  })
  return letters.join('-')
}

//18.Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The 
//Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
    let product; 
    let arr= numbers.map((x,i) => {
      product = 1;
      for(let j=0; j <numbers.length ; j++){
        if(i == j){
          continue;
        } else{
          product *=numbers[j]
        } 
      } return product
    }) 
    return arr
  }