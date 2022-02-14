// 以数字的视角 复杂度O(k ^ N)
function canPartitionKSubsets(nums, k) {
    // 排除一些基本情况
    if(k > nums.length) return false
    let sum = 0
    for(let v of nums) sum += v
    if(sum % k != 0) return false

    // k个桶（集合） 记录每个桶装的数字之和
    let bucket = new Array(k)
    // 理论每个桶中数字的和
    let target = sum / k
    // 穷举，看看nums是否能划分成k个和为target的子集
    return backtrack(nums, 0, bucket, target)
}

// 递归穷举nums中的每个数字
function backtrack(nums, index, bucket, target) {
    if(index == nums.length) {
        // 检查所有桶的数字之和是否都是target
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i] != target) return false
        }
        // nums成功平分成k个子集
        return true
    }

    // 穷举nums[index] 可能装入的桶
    for(let i = 0; i < bucket.length; i++) {
        // 剪枝 桶装装满了
        if(bucket[i] + nums[index] > target) continue
        // 将nums[index]装入bucket[i]
        bucket[i] += nums[index]
        // 递归穷举下一个数字的选择
        if(backtrack(nums, index + 1, bucket, target)) return true
        // 撤销选择
        bucket[i] -= nums[index]
    }

    // nums[index]装入哪个桶都不行
    return false
}


// 优化 - 让尽可能多的情况命中剪枝的那个 if 分支，就可以减少递归调用的次数，一定程度上减少时间复杂度
function canPartitionKSubsets(nums, k) {
    // 排除一些基本情况
    if(k > nums.length) return false
    let sum = 0
    for(let v of nums) sum += v
    if(sum % k != 0) return false

    // k个桶（集合） 记录每个桶装的数字之和
    let bucket = new Array(k)
    // 理论每个桶中数字的和
    let target = sum / k
    // 降序排列
    nums.sort((a, b) => b - a)
    // 穷举，看看nums是否能划分成k个和为target的子集
    return backtrack(nums, 0, bucket, target)
}



// 以桶的视角 复杂度O(k * 2 ^ N)
function canPartitionKSubsets1(nums, k) {
    // 排除一些基本情况
    if(k > nums.length) return false
    let sum = 0
    for(let v of nums) sum += v
    if(sum % k != 0) return false

    let used = new Array(nums.length)
    let target = sum / k
    // k号桶初始什么也没有装，从nums[0]开始做选择
    return backtrack3(k, 0, nums, 0, used, target)
}

function backtrack3(k, bucket, nums, start, used, target) {
    // 所有桶都装满了，nums一定全部用完了
    // target == sum / k
    if(k == 0) return true
    // 装满当前桶，递归穷举下一个桶的选择
    // 让下一个桶从nums[0]开始选数字
    if(bucket == target) return backtrack3(k - 1, 0, nums, 0, used, target)

    // 从start开始向后探查有效的nums[i]装入当前桶
    for(let i = start; i < nums.length; i++) {
        // 剪枝
        // nums[i]已经被装入其他桶中了
        if(used[i]) continue
        // 当前桶装不下nums[i]
        if(nums[i] + bucket > target) continue
        // 做选择
        used[i] = true
        bucket += nums[i]
        // 递归穷举下一个数字是否装入当前桶
        if(backtrack3(k, bucket, nums, i + 1, used, target)) return true
        // 撤销选择
        used[i] = false
        bucket -= nums[i]
    }
    // 穷举所有数字都无法装满当前桶
    return false
}



