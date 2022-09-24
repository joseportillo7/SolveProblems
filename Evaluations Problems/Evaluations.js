const end = [')',']','}']
const joinArray = ['()','[]','{}']

const findEnd =(array)=>{

    let lastCharacter = ''
    let positionOfLastCharacter = -1
    let index = -1
    let final = true
    
    final = array.some((x) => {
        index++
        let resul = end.some((char) => char === x)
        if(resul){
            lastCharacter = x
            positionOfLastCharacter = index
            return true
        }else{
            return false
        }
    })

    if(final){
        let joinstring = array[positionOfLastCharacter-1]+lastCharacter
        console.log(`Cadena: ${joinstring}`);

        if(joinArray.some(x => x === joinstring)){
            array.splice(positionOfLastCharacter-1,2)
            console.log(array);
        }else if(joinArray.some(x => x != joinstring)){
            return false
        }
        return array.length === 0 ? true : findEnd(array)
    }else{
        return false
    }
}

const functionSequence = (string) => {
    
    let array = string.split('') //['(','{','}',')']
    let findFirst = end.find(f => f === array[0])
    
    if(findFirst) return false
    return findEnd(array)
}


/****************************************************************************************************************/

const functionStrings = (a,b) =>{
    
    let array = b.split('')
    let inicio = 0
    let fin = a.length
    let cont = 0

    let newarray = []
    while(array.length != 0){
        newarray.push(array.splice(inicio,fin))
    }

    if(b.length < a.length) return 0

    newarray.map((value) => {
        let resul = value.join('')
        let resul2 = value.reverse().join('')
        
        if(resul === a){
            cont++
        }else if(resul2 === a){
            cont++
        }
    })
    return cont
}

console.log(functionStrings('ab','abababbababacab'));

module.exports.evaluation = {
    functionSequence,
    functionStrings
}