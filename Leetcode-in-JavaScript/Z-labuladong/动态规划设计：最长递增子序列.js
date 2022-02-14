// 动态规划解法（核心思想-数学归纳法） 复杂度O(n的2次幂)
function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(1)

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    let res = 0
    for(let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res
}


// 二分查找解法 复杂度O(Nlog N)
// 根据蜘蛛纸牌查找出规律 堆数就是最长递增子序列
function lengthOfLIS1(nums) {
    let top = new Array(nums.length)
    // 堆数
    let piles = 0
    for(let i = 0; i < nums.length; i++) {
        // 当前扑克牌
        let poker = nums[i]
        let left = 0
        let right = piles
        while(left < right) {
            let mid = Math.floor((left + right) / 2)
            if(top[mid] >= poker) {
                right = mid
            } else if(top[mid] < poker) {
                left = mid + 1
            }
        }
        // 没找到合适的堆牌 新建一堆
        if(left == piles) {
            piles++
        }
        // 放到牌堆顶
        top[left] = poker
    }
    console.log(top)
    // 牌堆数就是 LIS 长度
    return piles
}


