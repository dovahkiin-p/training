const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let len = 0
let arr = []
rl.on('line', l => {
    l = l.trim()
    let num = parseInt(l)
    if (len === 0) {
        len = num
        return
    }
    // if (arr.indexOf(num) == -1) {
    arr.push(parseInt(l))
    // }
    if (arr.length == len) {
        let s = new Set(arr)
        let _arr = Array.from(s)
        _arr.sort((a, b) => a - b)
        _arr.forEach(i=>{
            console.log(i);
        })
        len = 0
        arr = []
    }
})