/* 5.18.23

You will be given an array of objects (associative arrays in PHP, table in COBOL) 
representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes
the count of each coding language represented at the meetup.

*/ 

function countLanguages(list) {
    let languages = {}
    list.forEach(x => {
      if (x.language in languages){
        languages[x.language] += 1
      }else{
        languages[x.language] = 1
      }
    })
    return languages
  }