/* 5.15.23 

Your task is to return an array where each object will have a new property 'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >?

*/

function greetDevelopers(list) {
    // addding to the list another property
    list.forEach(x =>  x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
    return list
    }