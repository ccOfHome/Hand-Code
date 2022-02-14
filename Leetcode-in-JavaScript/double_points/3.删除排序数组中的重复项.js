const removeDuplicates = function (nums) {
    // 慢指针
    let cur = 0
    // i是快指针
    for (let i = 1; i < nums.length; i++) {
        // 不相等时交换值
        if (nums[cur] !== nums[i]) {
            cur++
            nums[cur] = nums[i]
        }
    }
    return cur + 1
}