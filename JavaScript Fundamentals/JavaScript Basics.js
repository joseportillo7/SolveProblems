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

module.exports.jsBasics = {
    MyFunction1,
    MyFunction2,
    MyFunction3
}
    
    
