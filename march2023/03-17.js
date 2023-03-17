//3.17.23 


//19. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//P: dna, always string, never empty 
//R : string , C - > G A -> T 
// 'ATGT' -> 'TACA' 
// 'CGAT' -> GCTA' 

function DNAStrand(dna){
    //iterate through string
    let reversed = ''
    for (let i=0; i<dna.length; i++){
    //if string is A/T/C/G , replace it with appropriate 
        if (dna[i]=='A'){
            reversed += dna[i].replace('A', 'T')
        } else if (dna[i] == 'T'){
            reversed += dna[i].replace('T', 'A')
        } else if (dna[i] == 'C'){
            reversed += dna[i].replace('C','G')
        } else {
            reversed += dna[i].replace('G','C')
        }
        }
        //return the new string with switched strand 
        return reversed
    }

