/**
 * ADJACENT ELEMENTS PRODUCT
 * 
 * 
 * Given an array of integers, find the pair of adjacent elements that has the 
 * largest product and return that product
 */

 const adjacentElement = (arr) => {
    
    let auxarr = []
    for(let i = 0; i < arr.length-1; i++){
        let first = arr[i]
        let second = arr[i+1]
        auxarr.push(first*second)
    }

    return Math.max(...auxarr)
}

console.log(adjacentElement([3,6,-2,-5,7,3]));
console.log(adjacentElement([5,1,2,3,1,4]));





/**
 * Shape Area from Polygon
 * 
 * 
 * Bellow we will define an n interesting polygon. your task is to find the area of a polygon
 * for a fiven n.
 * A 1 interesting polygon is just a square with a side of length 1.
 * An n interesting polygon is obtained by taking the n-1 interesting polygon and 
 * appending 1 interesting polygons to its rim, side by side.
 * You can see 1,2,3 and 4 interesting polygons in the picture below
 * 
 *                                   *
 *                        *         ***
 *             *         ***       *****
 *    *       ***       *****     *******                         
 *             *         ***       *****
 *                        *         ***
 *                                   *
 *  n = 1    n = 2      n = 3      n = 4 
 */
 const shapeArea = (n) => {
    let val = 1;
    for(let i = 2; i <= n; i++){
        val = val + ((i*4)-4)
    }
    return val
}

console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));






/**
 * Make Array Consecutive 2
 * 
 * 
 * Ratiorg got statues of different sizes as a present from CdeMaster for his bitthday,
 * each statue having an non=negative integer size. Since he likes to make things perfect,
 * he wants to arrange them from smallest to largest so that each statue will be bigger than
 * the previous one exactly by 1. He may need some additional stautes to be able to accomplish
 * that. Help him figure out the minimum number of additional statues needed.
 */
 function makeArrayConsecutive(statues) {
    let arr = []
    let result = 0
    statues.sort((a,b) => a -b)
    for(let i = 0; i< statues.length-1; i++){
        let left = statues[i]
        let right = statues[i+1]
        
        let diff = Math.abs(left-right)
        
        if(diff !== 1){
            diff--
            arr.push(diff)
        }
    }
    if(arr.length!=0){
        result = arr.reduce((a,b) => a+b)
    }
    
    return result
}

console.log(makeArrayConsecutive([6,2,3,8]));
console.log(makeArrayConsecutive([5,4,6]));



/**
 * 
 * Almost Increasing Sequence
 * 
 * Given a sequence of integers as an array, determine whether it is
 * possilbe to obtain a strictly increasing sequence by removing no more
 * than one element from the array
 * Note: sequence a0, a1,... an. Is considered to be a strictly increasing
 * if a0 < a1 < ... an. Sequence containing only one element is also considered 
 * to be strictly increasing.
 * 
 */
function almostIncreasing(sequence) {
    let flag = true
    let auxflag = false

    const searchNum = (num) =>{
        let cont = 0
        sequence.forEach(element => {
            if(element === num) cont++
        });
        return cont
    }

    const increasing = () =>{
        for(let i = 0; i < sequence.length-1; i++){
            let first = sequence[i]
            let second = sequence[i+1]
            
            if(!(first < second) && !(auxflag)){
                auxflag = true
                if(searchNum(second) === 2){
                    sequence.splice(i+1,1)
                }else{
                    sequence.splice(i,1)
                }
                increasing()
            }else if(!(first < second) && (auxflag)){
                flag = false
            }
        }
    }

    increasing()
        
    return flag
}
console.log(almostIncreasing([1,2,5,3,5])); //13-true
console.log(almostIncreasing([1,2,3,4,3,6])); //16-true
console.log(almostIncreasing([1,2,3,4,99,5,6])); //17-true
console.log(almostIncreasing([3,5,67,98,3])); //19-true



/**
 * Matrix Elements Sum
 * 
 * After becoming famous, the CodeBots decided to move into 
 * a new bulding together. Each of the rooms has a different cost, and some of 
 * them are free, but there's a rumour that all the free rooms are haunted!
 * Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, 
 * or any of the rooms below any of the free rooms.
 * 
 * Geven matrix, a rectangular matrix of integers, where each value represents
 * the cost of the room, your task is to return the total sum of all rooms
 * that are suitable for the CodeBots (Add up all the values that don't appear below a 0)
 */
function matrixElement(matrix) {
    let size = matrix.length
    let sum = 0
    
    const setZero = (posy, posx) =>{
        matrix[posy+1][posx] = 0
    }

    for(let i = 0; i <= size-1; i++){
        for(let j = 0; j <= matrix[i].length-1; j++){
            if(matrix[i][j] === 0){
                let cont = i
                while(cont < size-1){
                    setZero(cont,j)
                    cont++
                }
            }else{
                sum += matrix[i][j]
            }
        }
    }
    return sum
}

console.log(matrixElement([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));

