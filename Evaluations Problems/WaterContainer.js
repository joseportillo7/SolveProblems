/** 
 * Write a function that takes an array of whole positive numbers 
 * and return the max area posible in that array
*/
const functionContainer = (arr) =>{
    let newarr = []
    if(arr.every(num => num >= 0)){
        for(let i = 0; i<arr.length; i++){
            newarr.push(
                {
                    num: arr[i], pos: i+1
                }
            )
        }
    }

    let areaArr = []
    for(let i = newarr.length; i > 1; i--){
        for(let j = 0; j < newarr.length-1; j++){
            let posi = newarr[i-1].pos
            let posj = newarr[j].pos
            let x =  posi - posj
            let y = newarr[i-1].num < newarr[j].num ? newarr[i-1].num : newarr[j].num
            x*y > 0 ? areaArr.push(x*y) : 0
        }
    }

    return Math.max(...areaArr)
}

module.exports.GetArea = {
    functionContainer
}
