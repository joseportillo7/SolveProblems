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

module.exports.evaluation = {
    functionSequence
}