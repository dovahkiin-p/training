// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []    //返回值
    const used = []     //状态标记

    // path 传入的一条路径，已经选了哪些值
    dfs([]) // 递归的入口，空path传进去
    function dfs(path) {
        if (path.length == nums.length) {      // 个数选够了
            res.push(path.slice()); // 深度拷贝一份path，加入解集res
            return;                 // 结束当前递归分支
        }
        for (const i of nums) {
            // if (path.includes(i)) continue; // 别这么写！查找的时间是O(n)，增加时间复杂度
            if (used[i]) continue; // 使用过的，跳过

            path.push(i)        // 选择当前的数，加入path
            used[i] = true      // 记录一下 使用了
            dfs(path)           // 基于选了当前的数，递归
            path.pop();         // 上一句的递归结束，回溯，将最后选的数pop出来
            used[i] = false;      // 撤销这个记录
        }
    }
    return res
};
