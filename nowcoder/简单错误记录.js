const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let obj = {}
rl.on('line', l => {
    l = l.trim()
    let arr = l.split('\\')
    l = arr[arr.length - 1]
    let _arr = l.split(' '),
        len = _arr[0].length
    if (len > 16) {
        _arr[0] = _arr[0].slice(len - 16, len)
    }
    l = _arr.join(' ')
    if (obj[l] == undefined) {
        obj[l] = 1
    } else {
        obj[l]++
    }
    // lList.push(l)
}).on('close', () => {
    let objArr = Object.keys(obj)//.reverse()
    let k = objArr.length <= 8 ? 0 : objArr.length - 8
    for (let i = k; i < objArr.length; i++) {
        console.log(objArr[i], obj[objArr[i]]);

    }
})
