const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0,    //矩阵个数
    jzList = []   //矩阵存储(二维)
rl.on('line', l => {
    l = l.trim()
    if (n == 0) {
        n = Number(l)
        return
    }
    if (jzList.length < n) {
        let strArr = l.split(' ')
        jzList.push([parseInt(strArr[0]), parseInt(strArr[1])])
        return
    }
    // console.log(jzList);
    let tmpArr = [];
    let times = 0;//矩阵计算次数
    for (let i = 0; i < l.length; i++) {
        if (l[i] == '(') {
            continue
        } else if (l[i] == ')') {
            if (tmpArr.length < 2) {
                continue
            }
            // console.log(tmpArr);
            let two = tmpArr.pop()
            let one = tmpArr.pop()
            times += one[0] * one[1] * two[1]
            tmpArr.push([one[0], two[1]])
        } else {
            tmpArr.push(jzList[
                l[i].charCodeAt(0) - 'A'.charCodeAt(0)
            ])
        }
    }
    console.log(times);
    n = 0
    jzList = []
}).on('close', () => { })