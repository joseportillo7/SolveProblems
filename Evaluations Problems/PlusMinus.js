/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative
 * and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal
 */


 const plusMinus = (arr) => {
    // Write your code here
    let size = arr.length
    let ones = 0
    let minusones = 0
    let zero = 0
    
    arr.filter(item => {
        if(item > 0){
            ones++        
        }else if(item < 0){
            minusones++
        }else{
            zero++
        }
    })

    //solution to my unit test with jest
    // let result = {
    //     "1": (ones/size).toFixed(6),
    //     "-1": (minusones/size).toFixed(6),
    //     "0": (zero/size).toFixed(6)
    // }

    //solution from HackerRank
    console.log((ones/size).toFixed(6));
    console.log((minusones/size).toFixed(6));
    console.log((zero/size).toFixed(6));

    //return Object.values(result)
}

plusMinus([1,1,0,-1,-1])