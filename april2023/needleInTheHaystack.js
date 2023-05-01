/* 4.30.23 

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

P: array of strings 
R: the position at which the needle asides in the array 
E: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
 */ 

function findNeedle(haystack) {
//uses indexOf to find the index at which needle is 
 const answer = haystack.indexOf("needle")
 return `found the needle at position ${answer}`
}