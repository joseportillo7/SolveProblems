const getDifference = (arr) => {
    let line1 = 0
    let line2 = 0
    for(let i = 0; i < arr.length; i++){
        line1 += arr[i][i]
        line2 += arr[i][arr.length-1-i]
    }

    return Math.abs(line1-line2)
}

console.log(getDifference([[1,2,3],[4,5,6],[9,8,9]]));
console.log(getDifference([[6,8],[-6,9]]));
console.log(getDifference([[1,1,1],[1,1,1],[1,1,1]]));
console.log(getDifference([[-10,3,0,5,-4],[2,-1,0,2,-8],[9,-2,-5,6,0],[9,-7,4,8,-2],[3,7,8,-5,0]]));