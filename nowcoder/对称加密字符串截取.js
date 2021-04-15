const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', l => {
    l = l.trim()
    // l = 'abcdcbcc'
    // 找到最长的回文字符串即可
    // let longest = ''
    // end:
    // for (let i = l.length; i > 0; i--) {
    //     for (let j = 0; j <= l.length - i; j++) {
    //         let s = l.substr(j, i)
    //         // 判断s是不是回文字符串
    //         console.log(s,i,j);
    //         let sL = s.substr(0, s.length / 2),
    //             sR = s.substr(Math.ceil(s.length / 2), s.length / 2),
    //             sLReverse = sL.split('').reverse().join('')
    //         if (sR == sLReverse) {
    //             longest = s
    //             break end
    //         }
    //     }
    // }
    // console.log(longest, longest.length);
    //     console.log(longest.length);
    let max = 0
    // 当最长回文串的长度为奇数时
    for (let i = 0; i < l.length; i++) {
        let m = i - 1,
            n = i + 1
        while (m > -1 && n < l.length && l[m] == l[n]) {
            // console.log(m,n);
            max = Math.max(max, n - m + 1)
            m--
            n++
        }
    }
    // 当最长回文串的长度为ou数时
    for (let i = 0; i < l.length; i++) {
        let m = i,
            n = i + 1
        while (m > -1 && n < l.length && l[m] == l[n]) {
            // console.log(m,n);
            max = Math.max(max, n - m + 1)
            m--
            n++
        }
    }
    console.log(max);
}).on('close', () => { })

