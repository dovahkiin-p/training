// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */

// 原始解决思路，性能比较低
var lengthOfLongestSubstring = function (s) {
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let arr = []
        // arr.push(s[i])
        for (let j = i; j < s.length; j++) {
            // const element = array[j];
            if (arr.indexOf(s[j]) == -1) {
                arr.push(s[j])
            } else {
                break
            }
        }
        console.log(max, arr);
        max = Math.max(max, arr.length)
        // while(){

        // }
    }
    return max
};
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    // let set = new Set()
    let arr = []
    let l = s.length
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, max = 0
    for (let i = 0; i < l; i++) {
        // let a = 
        if (i > 0) {
            // 左指针向右移动一格，移除一个字符
            // ''.charAt
            // set.delete(s[i - 1])
            arr.shift()
        }
        // while (rk + 1 < l && !set.has(s[rk + 1])) {
        while (rk + 1 < l && arr.indexOf(s[rk + 1])) {
            // 满足条件的时候,不断地移动右指针
            // set.add(s[rk + 1])
            arr.push(s[rk + 1])
            rk++
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        max = Math.max(max, rk - i + 1);
    }
    return max
};