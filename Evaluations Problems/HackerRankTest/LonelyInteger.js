const Lonelyfunction = (a) => {
    let flag = false
    let sum
    return a.find(element =>{
        sum = 0
        for(let i=0; i< a.length; i++){
            if(element === a[i]){
                sum++
            }
        }
        if(sum === 1) return element
    })
}

console.log(Lonelyfunction([2,3,4,5,1,1,2,3,4]));