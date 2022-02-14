// 动态规划 暴力解法 复杂度O(N)
function maxSubArray(nums) {
    let n = nums.length
    if(n == 0) return 0
    let dp = new Array(n)

    // 第一个元素前面没有子数组
    dp[0] = nums[0]
    // 状态转移方程
    for(let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
        console.log(dp[i])
    }
    // 得到最大数组
    let res = -65536;
    for(let i = 0; i < n; i++) {
        res = Math.max(res, dp[i])
    }
    return res
}


// 状态压缩 降低空间复杂度
// dp[i]仅仅和dp[i-1]的状态有关
function maxSubArray1(nums) {
    let n = nums.length
    if(n == 0) return 0

    let dp_0 = nums[0]
    let dp_1 = 0
    let res = dp_0

    for(let i = 1; i < n; i++) {
        dp_1 = Math.max(nums[i], nums[i] + dp_0)
        dp_0 = dp_1
        // 计算最大值
        res = Math.max(res, dp_1)
    }
    return res
}



