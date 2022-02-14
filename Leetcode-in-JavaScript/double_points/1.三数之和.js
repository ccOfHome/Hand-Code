const threeSum = function (nums) {
    // 排除传入的空数组
    if (!nums || nums.length <= 0) return []
    // 从小到大排序
    nums = nums.sort((a, b) => a - b)
    // 必须有小于0的元素才可能会有结果，但也不能全是负数
    if (nums[0] > 0 || nums[nums.length - 1] < 0) return []

    const res = []
    for (let i = 0; i < nums.length; i++) {
        // 取小于0的
        if (nums[i] > 0) break
        // 去重
        if (nums[i] === nums[i - 1]) continue
        // 两数之和
        const target = -nums[i]
        // 左右指针
        let l = i + 1,
            r = nums.length - 1
        // 指针移动
        while (l < r) {
            // 两数之和
            let sum = nums[l] + nums[r]
            // 判断
            if (sum === target) {
                res.push([nums[i], nums[l], nums[r]])
                // 去重
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
            } else if (sum < target) {
                l++
            } else {
                r--
                // 跳出条件 右指针指向了小于0的数
                if (nums[r] < 0) break
            }
        }
    }
    return res
}