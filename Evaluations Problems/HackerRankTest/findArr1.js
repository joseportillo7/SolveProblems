const findArr = (arr) => {
    let arrordered = arr.sort((a,b) => a-b)
    return arrordered[Math.floor(arr.length /2)]
}


console.log(findArr([4,5,7,1,33]));
console.log(findArr([1,3,3,6,7,8,9]));
console.log(findArr([1,2,2,3,4,7,9]));
console.log(findArr([1,2,3,4,5,6,7,8,9]));
console.log(findArr([1,2,3,4,5,6,7,7,8,9,9]));
console.log(findArr([0,1,2,4,6,5,3]));
