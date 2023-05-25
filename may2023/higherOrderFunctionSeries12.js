/* 5.25.23

write a function that when executed as findAdmin(list1, 'JavaScript') returns only the 
JavaScript developers who are GitHub admins

*/

function findAdmin(list, lang) {
    //filters the list with two associate condition
    return list.filter(x => x.language === lang && x.githubAdmin ==="yes")
  }