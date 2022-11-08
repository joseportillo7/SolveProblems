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
    return auxarr2
}

console.log(codingFunction1('red2 blue5 black4 green1 gold3'));

const codingFunction2 = () =>{
    return ''
}


module.exports = {
    codingFunctiontest,
    codingFunction1,
    codingFunction2
}