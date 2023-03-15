function stringRepeat(inputString) {
    let x = Array.from(inputString).sort()
    let cont = 1
    let aux = []
    let aux2 = []
    
    for(let i = 0; i<= x.length; i++){
        if(x[i] === x[i+1]){
            cont++
        }else{
            aux.push(cont)
            cont = 1
        }
    }
    if(aux.length > 2){
        for(let i = 0; i<= aux.length-1; i++){
            if(aux[i] === aux[i+1]){
                aux2.push(true)
                i++
            }else{
                aux2.push(false)
                i++
            }
        }    
    }else{
        for(let i = 0; i<= aux.length-1; i++){
            if(aux[i] <= aux[i+1]){
                aux2.push(false)
                i++
            }else{
                aux2.push(true)
                i++
            }
        }
    }
    
    return aux2.join('').includes('false') ? false : true
}

console.log(stringRepeat('fyudhrygiuhdfeis'))
