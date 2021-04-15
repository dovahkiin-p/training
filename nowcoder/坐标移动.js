const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

// let dir = ['A', 'B', 'C', 'D']
// let reg = /[ADWS]\\d{1}\\d?/
rl.on('line', l => {
    l = l.trim()
    let steps = l.split(';'),
        x = 0,
        y = 0
    for (let i = 0; i < steps.length; i++) {
        let s = steps[i],
            ss = s.slice(1, 3),
            reg = ss.match(/[0-9]/g)
        if (reg && reg.length == ss.length) {
            if (s[0] == 'A') { x -= parseInt(ss) }
            if (s[0] == 'W') { y += parseInt(ss) }
            if (s[0] == 'D') { x += parseInt(ss) }
            if (s[0] == 'S') { y -= parseInt(ss) }
        }
    }
    // console.log(l);
    console.log(x + ',' + y);
}).on('close', () => { })
