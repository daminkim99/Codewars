//03.23.23

//27.Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings
// in this format: "MONTH DATE, YEAR".

//P: 4 , one entered code, correct code, currentDate , expiration date all in strings 
//R: true or false depending on the coupon 
//E: '123','123','September 5, 2014','October 1, 2014' --> T
//E: '123a','123','September 5, 2014','October 1, 2014'), false 

//create Date objects for the two dates 
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    dateNow = new Date (currentDate)
    dateExp = new Date (expirationDate)   
    //compare dates and see if they are over the expirary date 
    if (enteredCode === correctCode && dateNow <= dateExp){
      return true;
    } else {
     return false 
    }
  }
