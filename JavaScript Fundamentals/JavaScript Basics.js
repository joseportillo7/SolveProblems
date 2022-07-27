/**
 * Write a function that take two numbers a and b as argument
 * sum a and b 
 * return the result
 */
const MyFunction1 = (a,b) =>{
    return a + b
}

/**
 * Write a function that takes two values, say a and b, as argument
 * Return true if the two values are equal and of the same type
 */
const MyFunction2 = (a,b)=>{
    return a === b
}

/**
 * Write a function that takes a value as argument
 * Return de type of the value
 */
const MyFunction3 = (a) =>{
    return typeof(a)
}

/**
 * Write a function that takes a string (a) an a number (n) as argument
 * Return de nth character of string
 */
const MyFunction4 = (a,n)=>{
    return a[n-1]
}


/**
 * Write a function that takes a string as argument
 * remove the first 3 characters of string
 * Return the result
 */
const MyFunction5 = (a)=>{
    return a.slice(3)
}

/**
 * Write a function that takes a string as argument
 * Extract the last 3 characters from the string
 * Return the result
 */
const MyFunction6 = (a) =>{
    return a.slice(-3)
}




module.exports.jsBasics = {
    MyFunction1,
    MyFunction2,
    MyFunction3,
    MyFunction4,
    MyFunction5,
    MyFunction6
}
    
    
