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




module.exports.jsArray = {
    MyFunction1,
    MyFunction2
}