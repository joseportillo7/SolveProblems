const codingFunctiontest = (ops) => {
    let array = ops.split(',')
    
    let auxarr = []
    array.map(item => {
        if(item === 'C'){
            auxarr.pop()
        }else if(item === 'D'){
            let lastrecord = auxarr.pop()
            auxarr.push(lastrecord)
            auxarr.push(lastrecord*2)
        }else if(item === '+'){
            let sum1 = auxarr.pop()
            let sum2 = auxarr.pop()
            let suma = sum1 + sum2
            auxarr.push(sum2)
            auxarr.push(sum1)
            auxarr.push(suma)
        }else{
            auxarr.push(Number(item))
        }
    })
    return auxarr.reduce((ant, item) => item+ant)
} 


const codingFunction1 = (s) =>{
    let array = s.split(' ')
    let auxarr = []
    let auxarr2 = []
    array.map(item => {
        let number = item.charAt(item.length-1)
        let join = number + item
        auxarr.push(join)
    })

    auxarr.sort().filter(item =>{
      let newcolor = item.slice(1,item.length-1)
      auxarr2.push(newcolor)
    })
    return auxarr2.join(' ')
}

const codingFunction2 = (nums) => {
    
    let auxarr = []
    let auxarr2 = []
    let cont = 1
    let flag = false
    nums.map(item => {
        if(auxarr.length > 0){
            auxarr.forEach(it => {
                cont++
                if(it === item){
                    auxarr2.push(item)
                    flag = true
                }
            })
            if(flag){
                auxarr2.push(cont)
                auxarr = []
                cont=0
            }else{
                auxarr.push(item)
                cont = 1
            }
        }else{
            auxarr.push(item)
        }
    })
    return auxarr2
}

module.exports = {
    codingFunctiontest,
    codingFunction1,
    codingFunction2
}