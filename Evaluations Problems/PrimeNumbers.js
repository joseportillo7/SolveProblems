/**
 * Get a prime number
 */

let result = []
const GetPrimeNumber = (numero) =>{
    let suma = 0;
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            suma++
        }
    }

    if(suma === 2){
        result.push(numero)
    } 
}

const isPrime = (arr) =>{
    result = []
    arr.forEach(element => {
        if(element > 1) GetPrimeNumber(element)
    });

    return result
}

module.exports.GetPrime = {
    isPrime
}
