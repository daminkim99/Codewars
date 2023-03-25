/*  03.25.23 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

P: string  
R: # with last 4 digits showing as it is string
E: 4556364607935616" --> "############5616"
   "1" -->                "1"
    "Skippy" --> "##ippy"      
*/

function maskify(cc) {
//get the total length of input 
const length = cc.length
//if input is less than 4, print it the way it was 
if (length <= 4){
    return cc
} else {
    //get substring of the last 4 indexes 
    const substring = cc.slice(-4)
    return '#'.repeat(length-4) + substring 
}
}
  