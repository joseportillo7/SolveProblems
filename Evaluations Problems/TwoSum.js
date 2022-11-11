const functionTwoSum = (nums, target) =>{
    let flag = false    
    let contA = -1
    let suma = 0
    let auxarr = []
    nums.find (element => {
        contA++
        for(let i = contA+1; i < nums.length; i++){
            suma = element + nums[i]
            if(suma === target){
                if(auxarr.length <=2){
                    auxarr.push(contA)
                    auxarr.push(i)
                    flag = true
                }
            }else{
                suma=0
            }
        }
        if(flag) return auxarr
    })
    return auxarr
}

module.exports = {
    functionTwoSum
}