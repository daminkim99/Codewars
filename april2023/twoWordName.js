/*  4.22.23 

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

P: input of a string 
R: the initials of a string 
E: Sam Harris => S.H

*/

function abbrevName(name){
    //make it into an array 
    let nameArr = name.split(' ')
    //get the first letter of the words 
    let initials=[];
    nameArr.forEach(x => {
        initials.push(x[0].toUpperCase())
    })
    //join them by a .
    return initials.join('.')

}