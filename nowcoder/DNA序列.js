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
        let str = lList[0],
            n = lList[1]
        if (n >= str.length) {
            console.log(str);
        } else {
            let cgCouts = 0,
                otpStr = ''
            for (let i = 0; i <= str.length - n; i++) {
                let s = str.substr(i, n),
                    c = 0
                for (let j = 0; j < s.length; j++) {
                    if (s[j].toUpperCase() == "C" || s[j].toUpperCase() == "G") {
                        c++
                    }
                }
                if (c == n) {
                    otpStr = s
                    break
                }
                if (c > cgCouts) {
                    cgCouts = c
                    otpStr = s
                }
            }
            console.log(otpStr);
        }
        lList = []
    }
})