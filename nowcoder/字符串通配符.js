const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let regStr = ''
rl.on('line', l => {
    l = l.trim()
    if (!regStr) {
        regStr = l
        return
    }
    let flag = true
    let i = 0
    let j = 0
    for (; i < regStr.length, j < l.length;) {
        if (regStr[i] == l[j] || regStr[i] == '?') {
            i++
            j++
        } else if (regStr[i] == '*') {
            i++
            if (regStr[i] == '?') {
                i++
                j++
            }
            if (i == regStr.length) {
                j = l.length;
                break;
            }
            while (i < regStr.length && j < l.length && regStr[i] != l[j]) {
                j++
            }
            if (regStr[i] == l[j + 1] && regStr[i + 1] !== l[j + 1]) {
                j++
            }
        } else {
            break
        }
        // if (regStr[i] !== l[j] && regStr[i] !== '*' && regStr[i] !== '?') {
        //     flag = false
        //     break
        // } else {
        //     if (regStr[i] == l[j] || regStr[i] == '?') {
        //         i++
        //     }
        // }
    }
    if (i != regStr.length || j != l.length) {
        flag = false
    }
    console.log(flag);
    regStr = ''
}).on('close', () => { })