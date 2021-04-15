const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})
// 有重复元素的排列问题（横向格子重复n次，纵向格子重复m次），计算公式为：
// A(m+n,m+n)/(A(m,m)*A(n,n))=(m+n)!/(m!*n!)
rl.on('line', l => {
    l = l.trim()
    let arr = l.split(' '),
        m = Number(arr[0]),
        n = Number(arr[1])
    console.log(perm(m + n) / (perm(n) * perm(m)))
}).on('close', () => { })
function perm(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    // console.log(n, res);
    return res
}