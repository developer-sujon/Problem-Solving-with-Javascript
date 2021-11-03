const metrixA = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

const metrixB = [
    [9, 10, 11, 12],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
];

const metrixC = [
    [5, 13, 19, 14],
    [15, 23, 47, 98],
    [8, 22, 31, 24],
];


const metrixSum = ( metrixA, metrixB, metrixC )=>{
    const result = []
    for ( let i = 0; i < metrixA.length; i++ ) {
        const row = []
        for ( let j = 0; j < metrixA[i].length; j++ ) {
            row.push( metrixA[i][j] + metrixB[i][j] + metrixC[i][j])
        }
        result.push( row );
    }

    return result
}

const output = metrixSum ( metrixA, metrixB, metrixC )

console.log(output);