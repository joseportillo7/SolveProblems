/**
 * Write a function that takes an array (a) and a value (n) as argument
 * return the nth element of a
 */
const MyFunction1 = (a,n)=>{
    return a[n-1]
}


/**
 * Write a function that takes an array (a) as argument
 * Remove the first 3 element of a
 * return the result
 */
const MyFunction2 = (a)=>{
    return a.slice(3)
}


/**
 * Write a function that takes an array as argument
 * extract the last 3 elements of array
 * return the result 
 */
const MyFunction3 = (a) =>{
    return a.slice(-3)
}


/**
 * Write a function that takes an array as arguement
 * Extract the first 3 characters of array 
 * return the result
 */
const MyFunction4 = (a) =>{
    return a.slice(0,3)
}


module.exports.jsArray = {
    MyFunction1,
    MyFunction2,
    MyFunction3,
    MyFunction4
}