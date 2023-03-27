/* 3.27.23
Given the triangle of consecutive odd numbers:


             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

P: nth row in the triangle 
R: returns a sum of the numbers in the nth row 
E: 2 --> 3 + 5 = 8 

** pattern here is the 1st number in the nth row is (n-1) *2 +1 of the value of n , and the numbers in the rows are = n 
*/ 

function rowSumOddNumbers(n) {
	// n is the number of elements needed to be added 
    let numOfElements = n 
    //calculate first number of the sequence
    let firstNum = (n-1)*n +1 
    let answer= 0
    //loop through to get the sum of the numbers 
    for (let i=0; i <numOfElements ; i++){
        answer = firstNum + answer
        firstNum = firstNum +2
    }
    return answer
}

//pattern seeking , it's n*3 