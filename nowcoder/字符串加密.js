const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lList = [],
    upCaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    upCase = /[A-Z]/
rl.on('line', l => {
    // console.log(upCase);
    l = l.trim()
    lList.push(l)
    if (lList.length == 2) {
        let key = ded(lList[0].toUpperCase()),
            inStr = lList[1],
            newUpCase = key.concat(),
            otpStr = ''
        // console.log(key);
        for (let i = 0; i < upCaseList.length; i++) {
            let up = upCaseList[i]//.toUpperCase()
            if (newUpCase.indexOf(up) == -1) {
                newUpCase.push(up)
            }
        }
        // console.log(newUpCase);
        for (let i = 0; i < inStr.length; i++) {
            let ind = upCaseList.indexOf(inStr[i].toUpperCase()),
                s = newUpCase[ind]
                // console.log(s);
            if (!upCase.test(inStr[i])) {
                s = s.toLowerCase()
            }
            otpStr += s
        }
        console.log(otpStr);
        lList = []
    }
}).on('close', () => {

})
// 去重
// 输入字符串，返回去重后的数组
function ded(str) {
    let arr = str.split(''),
        s = new Set(arr)
    arr = Array.from(s)
    return arr//.join('')
}