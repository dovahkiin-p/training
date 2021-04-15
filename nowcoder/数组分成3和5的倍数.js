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
        let arr = lList[1].split(' '),
            rest = [],
            sum5 = 0,
            sum3 = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 5 == 0) {
                sum5 += Number(arr[i])
            } else if (arr[i] % 3 == 0) {
                sum3 += Number(arr[i])
            } else {
                rest.push(Number(arr[i]))
            }
        }
        console.log(ff(sum3, sum5, rest, 0));
        lList = []
    }
}).on('close', () => {

})

function ff(s3, s5, r, idx) {
    if (r.length == idx) {
        return s3 == s5
    }
    if (r.length > idx) {
        return ff(s3 + r[idx], s5, r, idx + 1) || ff(s3, s5 + r[idx], r, idx + 1)
    }
    return false
}