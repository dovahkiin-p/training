/*
 * 给定一个仅包含小写字母的字符串，求它的最长回文子串的长度。
 */


const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', l => {
    l = l.trim()
    // let maxStrL = 0
    end:
    for (let i = l.length; i > 0; i--) {
        for (let j = 0; j < l.length - i; j++) {
            let _l = l.substr(j, i),//.split('')
                half = _l.substr(0, i / 2),
                halfA = _l.substr(Math.ceil(i / 2), i / 2),
                halfReverse = half.split('').reverse().join('')
            // halfReverse = half.reverse()
            // console.log(_l, half, halfA, halfReverse);
            // console.log(half.split(''));
            if (halfA == halfReverse) {
                console.log(i);
                // maxStrL == i
                break end
            }
        }
    }
})