const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lList = []
rl.on('line', l => {
    l = l.trim()
    lList.push(l)
    if (lList.length == 2) {
        console.log(sum(lList[0], lList[1]));
        lList = []
    }
}).on('close', () => { })

function sum(a, b) {
    let maxLen = Math.max(a.length, b.length)
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')
    let f = 0,   //"进位"
        sum = '',
        t = 0
    for (let i = maxLen - 1; i > -1; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f
        f = Math.floor(t / 10)
        sum = t % 10 + sum
    }
    if (f == 1) {
        sum = '1' + sum
    }
    return sum
}