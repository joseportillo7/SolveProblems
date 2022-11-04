/**
 * Give two strings a and b, both consisting only of lowercase English letters,
 * your task is to calculate how many strings equal to a can be constructered using only letters from the string b?
 * Each letter can be used only once and in one string only.
 */

const combination = (a,b) =>{
    let pila = []
    let auxarr = []

    let arrayBya = Array.from(a)
    let arrayByb = Array.from(b) 

    //clear string of 'b'
    arrayByb.forEach(element => {
        if(a.includes(element)){
            pila.push(element)
        }
    });

    //we're looking for a combination of letters from b
    if(a.length > pila.length){
        return 0
    }else{
        let contP = 0
        let cadena = ''
        while(pila.length > 0){
            arrayBya.map(letterA => {
                cadena += pila.find(letterP => {
                    if(letterP === letterA){
                        pila.splice(contP,1)
                        contP = 0
                        return letterP
                    }
                    contP++
                })
    
                if(cadena === a){
                    auxarr.push(cadena)
                    cadena = ''
                }else if(cadena === 'undefined'){
                    pila.length = 0
                    cadena = ''
                }
            })
        }
    }

    return auxarr.length
}

console.log(combination('ab','abcbcb'));

module.exports = {
    combination
}
