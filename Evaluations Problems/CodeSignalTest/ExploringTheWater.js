/**
 * Alternating Sums
 * 
 * Several people are standing in a row and need to be divided into
 * two teams. The firts person goes into team 1, the second goes into
 * team 2, the third into team 1 again, the fourth into team 2, and so on
 * 
 * You are given an array of positive integers the weights of the people.
 * Return an array of two integers, where the first element is the total weight of team 1
 * and the second is the total weight of the team 2, after de division is complete.
 */

const alternatingSums = (a)=> {
    let sumA = 0
    let sumB = 0
    let cont = 0
   a.filter(a=>{
        if(cont % 2 === 0){
            cont++
            sumA+= a
        }else{
            cont++
            sumB+= a
        }
    })

    let result = []
    result.push(sumA)
    result.push(sumB)

    return result
}

console.log(alternatingSums([100,51,50,100])); //[150,151]
console.log(alternatingSums([80])); //[80,0]
console.log(alternatingSums([100,50])); //[100,50]




/**
 * Add Border
 * 
 * Given a rectangular matrix of characters, add a border 
 * of asterisks (*) to it. 
 *
 */
const addBorder = (arr) =>{
    let sizeLarge = arr[0].length
    let sizeHigh = arr.length
    let str = ""
    let aux = []

    for(let i = 0; i < sizeLarge+2; i++){
        str+="*" 
    }

    aux.push(str)

    for(let i = 0; i < sizeHigh; i++){
        aux.push("*"+arr[i]+"*")
    }

    aux.push(str)

    return aux
}

console.log(addBorder(["abc","def"]));
console.log(addBorder(["abcd","defd","rred"]));
console.log(addBorder(["abcdh","defdg","rrede"]));


/**
 * Are Similar?
 * 
 * 
 * 
 */

const areSimilar = (a,b) =>{
    let arrA = a.sort((a,b)=> a-b)
    let arrB = b.sort((a,b)=> a-b)
    let flag = true
    let cont = 0

    let resolveSimilar = ()=>{
        cont++
        if(cont == 2){
            //so, return false because aren't similar
            cont=0
            return false
        }else{
            cont++
            return true
        }
    }

    arrA.map(a =>{
        if(flag){
            for(let i = cont; i<arrB.length; i++){
                if(a === arrB[i]){
                    flag = true
                    cont++
                    break
                }else{
                    //create a method to resolve the similar
                    
                    break
                }
            }
        }else{
            return flag
        }
    })
    
    return flag
}

console.log(areSimilar([1,2,3],[1,2,3])); //true 
console.log(areSimilar([1,2,3],[1,3,2])); //true because count only has one moves
console.log(areSimilar([1,2,3,4,5],[1,3,2,5,4])); //true becauso count only has two moves
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],[832, 570, 148, 998, 533, 561, 455, 147, 894, 279]));
