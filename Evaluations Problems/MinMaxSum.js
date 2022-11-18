function miniMaxSum(arr) {
    // Write your code here
    let max = arr.sort().pop()
    let min = arr.sort().shift()
    let sumMax = 0
    let sumMin = 0

    arr.forEach(element => {
        sumMax += element
    });

    arr.forEach(element => {
        sumMin += element
    });

    let resmax = sumMax + max
    let resmin = sumMin + min
    
    console.log(resmin + ' ' + resmax);

}

console.log(miniMaxSum([1,2,3,4,5]));