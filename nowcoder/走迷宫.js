let r = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let res = [];
r.on('line', (input) => {
    res.push(input);
})
r.on('close', () => {
    while (res.length) {
        // let arr = [];
        // console.log(res[0]);
        let row = res[0].split(' ').map(item => Number(item))[0];
        let col = res[0].split(' ').map(item => Number(item))[1];
        let cArr = res.slice(1, row + 1).map(item => item.split(' '));
        // console.log(cArr);
        let x = 0;
        let y = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (cArr[i][j] === '0' && (i === x || y === j)) {
                    x = i;
                    y = j;
                    console.log('(' + i + ',' + j + ')');
                }
            }
        }
        res = res.slice(row + 1);
    }
})