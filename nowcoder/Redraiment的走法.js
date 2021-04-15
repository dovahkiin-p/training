const r = require('readline')
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
rl.on('line', l => {
    l = l.trim()
    if (n === 0) {
        n = parseInt(l)
        return
    }
    let nums = l.split(' ')
    nums.forEach(i=>Number(i))
    let nL = nums.length
    let maxL = 1
    let dA = []
    dA[maxL] = nums[0]
    for (let i = 0; i < nL; i++) {
        if (dA[maxL] < nums[i]) {
            dA[maxL++] = nums[i]
        } else {
            let l = 1
            let r = maxL
            let pos = 0
            // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
            while (l <= r) {
                let mid = (l + r) >> 1;
                if (dA[mid] < nums[i]) {
                    pos = mid;
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            dA[pos + 1] = nums[i];
        }
    }
    console.log(maxL);
    n = 0
}).on('close', () => { })

// 30
// 186 13 322 264 328 110 120 73 20 35 240 97 150 221 284 324 46 219 239 284 128 251 298 319 304 36 144 236 163 122 
// 98
// 243 277 172 222 127 70 34 1 261 277 10 151 29 159 318 16 50 41 309 315 303 47 5 257 246 32 105 96 199 304 194 7 218 158 239 244 58 9 250 326 210 194 312 281 244 79 170 316 64 291 139 178 35 299 322 21 238 54 102 105 75 17 187 55 290 115 165 51 155 107 136 112 270 164 15 26 142 158 312 31 165 262 214 1 67 213 88 283 198 95 37 317 43 301 269 25 228 321