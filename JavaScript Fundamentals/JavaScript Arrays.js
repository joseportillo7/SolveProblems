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


/**
 * Write a function that takes an array and an number as argument
 * It should return the last n elements of array
 */
const MyFunction5 = (array, n) =>{
    return array.slice(-n)
}


/**
 * Write a function that takes an array and a value as argument
 * The function should remove all elements equel to 'b' from the array
 * return the filtered array
 */
const MyFunction6 = (array,b) =>{
    return array.filter(item => item !== b)
}

/**
 * Write a function that takes an array as argument
 * return the number of elements in array
 */
const MyFunction7 = (array) =>{
    return array.length
}


module.exports.jsArray = {
    MyFunction1,
    MyFunction2,
    MyFunction3,
    MyFunction4,
    MyFunction5,
    MyFunction6,
    MyFunction7
}