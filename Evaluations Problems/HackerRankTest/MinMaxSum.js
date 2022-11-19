/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
 * four of the five integers. Then print the respective minimum and maximum values as a sinble line of two space
 * separated long integers
 */

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