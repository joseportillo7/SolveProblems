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


/**
 * Write a function that takes a string as argument
 * Get the first 3 character of a 
 * Return the result
 */
const MyFunction7 = (a) =>{
    return a.slice(0,3)
}


/**
 * Write a function that takes a string (a) as argument
 * Extract the first half a
 * Return the result
 */
const MyFunction8 = (a) =>{
    return a.slice(0, a.length/2)
}


/**
 * Write a function that takes a string (a) as argument
 * Remove the las 3 characters of string
 * Return the result
 */
const MyFunction9 = (a) =>{
    return a.slice(0, -3)
}


/**
 * Write a function that takes two values a and b as argument
 * Return  b percent of a
 */
const MyFunction10 = (a,b) => {
    return a * b/100
}


/**
 * Write a function that takes 6 values (a,b,c,d,e,f) as argument
 * sum a and b 
 * Then substract by c
 * Then multiply by d and divide by e
 * Finally raise to the power of f and return the result
 * Tipp: mind the order
 */
const MyFunction11 = (a,b,c,d,e,f) => {
    return Math.pow((d*((a+b)-c)/e),f)
}


/**
 * Write a function that takes two string (a and b) as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 */
const MyFunction12 = (a,b) =>{    
    return a.includes(b) ? b.concat(a) : a.concat(b)
}


/**
 * Write a function that takes a number as argument
 * If the number is even, return true
 * Otherwise, return false
 */
const MyFunction13 = (a) =>{
    return a % 2 ==0 ? true : false
}


/**
 * Write a function that takes two string (a and b) as argument
 * Return the number of times a occurs in b
 */
const MyFunction14 = (a,b)=>{
    return b.split(a).length-1
}

/**
 * Write a function that takes a number (a) as argument
 * If a is a whole number (has no decimal place), return true
 * Otherwise, return false
 */
const MyFunction15 = (a)=>{
    return a % 1 == 0 ? true : false
}

module.exports.jsBasics = {
    MyFunction1,
    MyFunction2,
    MyFunction3,
    MyFunction4,
    MyFunction5,
    MyFunction6,
    MyFunction7,
    MyFunction8,
    MyFunction9,
    MyFunction10,
    MyFunction11,
    MyFunction12,
    MyFunction13,
    MyFunction14,
    MyFunction15
}