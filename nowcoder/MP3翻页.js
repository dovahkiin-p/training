const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

var start = 0; //当前列表第一个位置
var now = 0;//当前光标位置
var max = 0;//歌曲数量
var flag = false;
rl.on('line', l => {
    l = l.trim()
    if (!flag) {
        flag = true;
        max = parseInt(l) - 1
        start = 0;
        now = 0;
        return;
    }
    flag = false;
    for (let i = 0; i < l.length; i++) {
        if (l[i] == "U") {
            moveUp()
        } else {
            moveDown()
        }
    }
    let otpArr = []
    for (let i = start; i <= start + 3 && i <= max; i++) {
        otpArr.push(i + 1)
    }
    console.log(otpArr.join(' '))
    console.log(now + 1)
}).on('close', () => { })

function moveUp() {
    now--;
    if (now < 0) {
        now = max
        if (max > 4) {// 歌曲数目大于4时需要翻页到列表底部，start位置需要移动
            start = max - 3
        }
    } else {
        if (now + 1 === start) { //当前光标向上翻页了，列表起始位置也要向上移动一次
            start--;
        }
    }
}
function moveDown() {
    now++
    if (now > max) {
        now = 0
        if (max > 4) {//列表底部向下翻页
            start = 0
        }
    } else {
        if (start + 4 === now) {
            start++;
        }
    }
}