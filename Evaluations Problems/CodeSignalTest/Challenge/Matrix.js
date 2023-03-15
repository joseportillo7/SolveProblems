/**
 * Your are given a matrix of integers field of size n x m representing
 * a game field, and also a matrix of integers figure of size 3x3
 * representing a figure. Both matrices contain only 0 and 1, where 
 * 1 means that the cell is occupied, and - means that the cell is free.
 * 
 * You choose a position at the top of the game field where you put 
 * the figure and then drop it down. The figure falls down until it either
 * reaches the ground (bottom of the field) or lands oon an occupied cell,
 * which blocks it from falling further. After the figure has stopped falling,
 * some of the rows in the field may become fully occupied.
 * 
 * Your task is to find the dropping position such that at least one full row
 * is formed. As a dropping position you should consider the column index of the 
 * cell in game filed which matches the top left corner of the figure 3x3 matrix.
 * If there are multiple dropping positions satisfying the condition, feel free 
 * to return any of them. If there are no such dropping positions, return -1
 * 
 * Note: When falling, the 3x3 matrix of the figure must be entirely inside the
 * game field, even if the figure matris is not totally occupied 
 * 
 */

const matrixFunction = (field, figure)=>{
    let sizefield = field[0].length
    let countPositions = (sizefield/3)

    for(let i = 0; i<field.length; i++){
        for(let j = 0; j<field[i].length; j++){
            for(let k = 0; k<figure.length; k++){
                
            }
        }
    }
}

console.log(matrixFunction(
    [[0,0,0],
     [0,0,0],
     [0,0,0],
     [1,0,0],
     [1,1,0]
    ],
    [[0,0,1],[0,1,1],[0,0,1]]));


