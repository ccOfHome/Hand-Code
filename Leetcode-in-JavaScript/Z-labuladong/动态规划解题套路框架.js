// 暴力递归 复杂度O(2的n次幂)
function fib(n) {
    if(n == 1 || n == 2) return 1
    return fib(n - 1) + fib(n - 2)
}
// 存在大量重复计算，引出 重叠子问题


// 带备忘录的递归解法   相当于对递归图进行了剪枝操作 自顶向下
// 复杂度O(n)
function fib_1(n) {
    // 备忘录 初始化为0
    let memo = new Array(n + 1).fill(0)
    return helper(memo, n)
}

function helper(memo, n) {
    if(n == 1 || n == 2) return 1
    // 备忘录中已写入
    if(n != 0 && memo[n] != 0) return memo[n]
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
    return memo[n]
}

// 动态规划（自底向上）
// 动态规划一般都脱离了递归，而是由循环迭代完成计算
// 复杂度O(n)
function fib_2(n) {
    // 备忘录DP Table
    let dp = new Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 1
    //状态转移方程
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// 动态规划问题最困难的就是写出这个暴力解，即状态转移方程
// 只要写出暴力解，优化方法无非是用备忘录或者 DP table
// 细节优化 不需要一个 DP table 来存储所有的状态，只要想办法存储之前的两个状态就行了
// 状态压缩
// 复杂度O(1)
function fib_3(n) {
    if(n <= 0) return 0
    if(n == 1 || n == 2) return 1
    let prev = 1
    let curr = 1
    for(let i = 3; i <= n; i++) {
        let sum = prev + curr
        prev = curr
        curr = sum
    }
    return curr
}


// 找零钱问题
// 暴力递归 复杂度O(k * n的k次幂)
function coinChange(coins, amount) {
    return dp(coins, amount)
}

function dp(coins, amount) {
    if(amount < 0) return -1
    if(amount == 0) return 0

    let res = amount
    for(let coin of coins){
        // 子问题
        let subProblem = dp(coins, amount - coin)
        // 子问题无解
        if(subProblem == -1) continue
        // 子问题中选择最优解
        res = Math.min(res, subProblem + 1)
    }
    return res == amount ? -1 : res
}

// 带备忘录的递归 复杂度 O(kn)
let memo = new Array(amount + 1).fill(-521)
function coinChange1(coins, amount) {
    return dp1(coins, amount)
}

function dp1(coins, amount) {
    if(amount < 0) return -1
    if(amount == 0) return 0

    // 查备忘录 防止重复计算
    if(memo[amount] != -521){
        return memo[amount]
    }

    let res = amount
    for(let coin of coins) {
        // 计算子问题的结果
        let subProblem = dp(coins, amount - coins)
        // 子问题无解 跳过
        if(subProblem == -1) continue
        // 子问题中选择最优解  
        res = Math.min(res, subProblem + 1)
    }
    // 把计算结果存入备忘录
    memo[amount] = res == amount ? -1 : res
    return memo[amount]
}


// dp数组的迭代解法（自底向上）
function coinChange2(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    
    dp[0] = 0
    for(let i = 0; i < dp.length; i++) {
        for(let coin of coins) {
            // 子问题无解 跳过
            if(i - coin < 0) continue
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount]
}
