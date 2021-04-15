// 1、对输入的字符串进行加解密，并输出。
// 2、加密方法为：
// 当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；
// 当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；
// 其他字符不做变化。
// 3、解密方法为加密的逆过程。
const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    count = 1
rl.on('line', l => {
    l = l.trim()
    let str = ''
    for (let i = 0; i < l.length; i++) {
        let lowInd = lowCase.indexOf(l[i]),
            upInd = upCase.indexOf(l[i]),
            nInd = nums.indexOf(l[i])
        if (count % 2 == 0) {
            // 解密
            if (lowInd > -1) {
                str += upCase[lowInd == 0 ? 25 : lowInd - 1]
            } else if (upInd > -1) {
                str += lowCase[upInd == 0 ? 25 : upInd - 1]
            } else if (nInd > -1) {
                str += nums[nInd == 0 ? 9 : nInd - 1]
            }
        } else {
            // 加密
            if (lowInd > -1) {
                str += upCase[lowInd == 25 ? 0 : lowInd + 1]
            } else if (upInd > -1) {
                str += lowCase[upInd == 25 ? 0 : upInd + 1]
            } else if (nInd > -1) {
                str += nums[nInd == 9 ? 0 : nInd + 1]
            }
        }
    }

    count++
    console.log(str);
})