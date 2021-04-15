const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', l => {
    l = l.trim()
    while (l.length > 8) {
        console.log(l.substr(0, 8));
        l = l.substr(8, l.length - 8)
    }
    console.log(ff(l));
}).on('close', () => { })

function ff(str) {
    return str.padEnd(8, '0')
}