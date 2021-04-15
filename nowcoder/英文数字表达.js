const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    tens = ["ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    twieties = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ranges = ["hundred", "thousand", "million", "billion"],
    range = [1e2, 1e3, 1e6, 1e9, 1e12]
rl.on('line', function (l) {
    console.log(transfer(parseInt(l)))
});

function transfer(num) {
    //     console.log(num)
    if (num < 10) {
        return ones[num]
    }
    if (num < 20) {
        return tens[num % 10]
    }
    if (num < 100) {
        return twieties[Math.floor(num / 10)] + (num % 10 == 0 ? '' : ' ' + ones[num % 10])
    }
    // 递归调用
    for (let i = 0; i < 4; i++) {
        if (num < range[i + 1]) {
            return transfer(Math.floor(num / range[i])) + " " + ranges[i] +
                (num % range[i] == 0 ? " " : (i != 0 ? " " : " and ") + transfer(num % range[i]));
        }
    }
    return "";
}
