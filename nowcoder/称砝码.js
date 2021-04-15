const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lList = []
rl.on('line', l => {
    l = l.trim()
    lList.push(l)
    if (lList.length == 3) {
        let s = new Set('0')//利用set集合来去重
        let mArr = lList[1].split(' ')
        let xArr = lList[2].split(' ')
        for (let i = 0; i < mArr.length; i++) {
            for (let j = 1; j <= xArr[i]; j++) {
                let newList = []
                // 获取新加砝码后可能的组合数
                s.forEach(k => {
                    newList.push(parseInt(k) + parseInt(mArr[i]))
                })
                // 合并组合数，自动去重
                newList.forEach(k => {
                    s.add(k.toString())
                })
            }
        }
        console.log(s.size);
        // s.clear()  初始化set集合
        // s.add('0')
        lList = []
    }
}).on('close', () => { })