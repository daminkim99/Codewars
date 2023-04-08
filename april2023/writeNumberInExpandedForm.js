/* 4.7.23 

You will be given a number and you will need to return it as a string in Expanded Form.
For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'

P: input is a number 
R: a string of expanded form of the numbers 
*/ 

function expandedForm(num) {
    // make use of padEnd
    //change num into string
    let str = num.toString()
    let answer = []
    //loop through the length of the string 
    for (i=0; i<str.length; i++){

    //if the number is 0 thn skip 
      if(str[i]==0) continue;
      else {
    //push the numbers into the array with the 0's 
        answer.push(str.charAt(i).padEnd(str.length-i,'0'))
      }
    }
    //join it into a string 
    return answer.join(' + ')
  }