const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})
<% %>
let ones = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
    dec = ['元', '角', '分', '零', '整'],
    ranges = ['拾', '佰', '仟', '万', '亿'],
    range = [1e1, 1e2, 1e3, 1e4, 1e8]
rl.on('line', l => {
    l = l.trim()
    let str = '人民币',
        lArr = l.split('.'),
        intPart = parseInt(lArr[0]),
        decFra = lArr[1]
    if (parseFloat(l) < 1) {
        str += ones[decFra[0]] + '角' + ones[decFra[1]] + '分'
    } else {
        str += transfer(intPart) + '元'
        if (decFra != undefined && parseInt(lArr[0]) !== 0) {
            if (parseInt(decFra[0])) {
                str += ones[decFra[0]] + '角'
            }
            if (parseInt(decFra[1])) {
                str += ones[decFra[1]] + '分'
            }
        } else {
            str += '整'
        }
        str = str.replace('壹拾', '拾')
    }
    console.log(str);
}).on('close', () => {

})
function transfer(n) {
    if (n < 10) {
        return ones[n]
    }
    // 递归调用
    for (let i = 0; i < 4; i++) {
        if (n < range[i + 1]) {
            return transfer(Math.floor(n / range[i])) + ranges[i]
                // + (n / range[i]).toString().indexOf('0')>-1?'零':''
                + ((n % range[i] < range[i] / 10) && (n % range[i] !== 0) ? '零' : '')
                + transfer(n % range[i])
        }
    }
    return "";
}