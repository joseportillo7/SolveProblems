/**
 * All Longest Strings
 * 
 * Given an array of strings, return another array containing all os its longest strings.
 * 
 */
const longestString = (arr) => {
    let auxarr = []
    let bigger = []
    if(arr.length > 1){
        arr.forEach(element => {
            bigger.push(element.length)    
        });

        let max = Math.max(...bigger)

        for(let i = 0; i <= arr.length-1; i++){
            if(arr[i].length === max){
                auxarr.push(arr[i])            
            }
        }
    }else{
        return arr
    }

    return auxarr
}

console.log(longestString(['aba','aa','ad','vcd','aba'])); //['aba','vcd','aba']
console.log(longestString(['aa'])); //['aa']
console.log(longestString(['abc','eeee','abcd','dcd'])); //['eeee','abcd']


/**
 * Common Character Count
 * 
 * Given two strings, find the number of common characters
 * between them.
 * 
 */
const characterCount = (s1,s2) => {
    let str = ''
    let auxs1 = s1.split('')
    let auxs2 = s2.split('')

    for(let x = 0; x < auxs1.length; x++){
        let conts1 = 0
        let conts2 = 0
        let strings1 = ''
        let strings2 = ''

        if(!(str.includes(auxs1[x]))){
            for(let i = 0; i < auxs1.length; i++){
                if(auxs1[x] === auxs1[i]){
                    conts1++
                    strings1 += auxs1[i]
                }
            }
            for(let i = 0; i < auxs2.length; i++){
                if(auxs1[x] === auxs2[i]){
                    conts2++
                    strings2 += auxs2[i]
                }
            }
            str += (conts1 < conts2) ? strings1 : strings2
        }
    }
    
    return str.length
}

console.log(characterCount('aabcc','adcaa'));
console.log(characterCount('abca','xyzbac'));
console.log(characterCount('zzzz','zzzzzzz'));


/**
 * Is Lucky
 * 
 * Ticket numbers usually consist of an even number of digits.
 * A ticket number is considered lucky if the sum of the first half 
 * of the digits is equal to the sum of the second half.
 * 
 * Given a ticket number n, determine if it's lucky or not.
 * 
 */
 function isLucky(n) {
    let number = n.toString().split('')
    let size = number.length/2
    let sumA = 0
    let sumB = 0
    
    for(let i =0; i<size;i++){
        sumA += Number(number[i])
    }
    
    for(let i =size; i<number.length;i++){
        sumB += Number(number[i])
    }
    
    return sumA === sumB ? true : false    
}
console.log(isLucky(1230)); //true
console.log(isLucky(239017)); //false



/**
 * Sort By Height
 * 
 * Some people are standing in a row in a park. There are
 * trees betwwn them which cannot be moved. Your task is to rearrange the 
 * people by theri heights in a non-descending order without moving the 
 * trees. People ca be very tall.
 * 
 */
const sortHeight = (a) =>{
    let auxarr = []
    let indexarr = []
    let cont = -1
    a.forEach(item => {
        cont++
        if(item !== -1){
            auxarr.push(item)
        }else{
            indexarr.push(cont)
        }
    })
    
    //I'm going to sort the auxarr
    auxarr.sort((a,b)=> a-b)
    
    //I'm going to put the -1 into auxarr
    indexarr.forEach(index => {
        auxarr.splice(index,0,-1)
    })
    
    return auxarr
}

console.log(sortHeight([-1,150,190,170,-1,-1,160,180]));
console.log(sortHeight([-1]));
console.log(sortHeight([4,2,9,11,2,16]));


/**
 * Reverse In Parentheses
 * 
 * Write a function that reverses characters in (possibly nested) 
 * parentheses in the input string
 * 
 * Input strings will always be well-formed with matching () 
 * 
 */
 function reverseParentheses(inputString) {    
    let auxString = inputString
while(auxString.includes('(')){
    let last = auxString.indexOf(')')
    let start = auxString.lastIndexOf('(', last)
    let reversed = auxString.slice(start + 1, last).split('').reverse().join('')
    auxString = auxString.slice(0, start) + reversed + auxString.slice(last +1)
}
return auxString
}

console.log(reverseParentheses('(bar)')); //rab
console.log(reverseParentheses('foo(bar)baz')); //foorabbaz
console.log(reverseParentheses('foo(bar)baz(blim)')); //foorabbazmilb
console.log(reverseParentheses('foo(bar(baz))blim')); //foobazrabblim



