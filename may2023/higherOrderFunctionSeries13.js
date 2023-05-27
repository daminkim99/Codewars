/* 5.27.23 

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.

*/


function isLanguageDiverse(list) {
    //get the count of each languages 
    const js = list.filter(e => e.language === 'JavaScript').length;
    const ruby = list.filter(e => e.language === 'Ruby').length;
    const python = list.filter(e => e.language === 'Python').length;
    //put the counts into an array
    const count = [js,ruby,python]
    //get the max and the min of the count and check to see if they are at the most two times higher 
    return Math.max(...count) <= Math.min(...count) * 2 ? true : false;
    }
