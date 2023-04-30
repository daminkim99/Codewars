/* 4.29.23 

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010 --- > 
 (byte1)   (byte2)   (byte3)   (byte4)

 10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

 The total number of bits will always be a multiple of 8.

The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


P: array of numbers 
R: array of numbers organized into group of 8 but reversed
E: above 

*/ 

function dataReverse(data) {
    //make a for loop and slice 8 digits from the data and add it to the front of the array 
     let result = []
     for (let i = 0 ; i < data.length ; i = i+8){
       result.unshift(...data.slice(i, i+8))
     }
    return result; 
   }
   