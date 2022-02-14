const sortColors = function (nums) {
    // 头指针
    let p1 = 0
    // 尾指针
    let p2 = nums.length - 1
    // 遍历指针
    let cur = p1

    while (cur <= p2) {
        // 头指针右移
        if (nums[cur] === 0) {
            // 交换值
            swap(nums[cur], nums[p1])
            p1++
            cur++
        } else if (nums[cur] === 2) { // 尾指针左移
            // 交换值
            swap(nums[cur], nums[p2])
            p2--
        } else { // 遍历指针右移
            cur++
        }
    }
}

function swap(a, b) {
    let temp = a
    a = b
    b = temp
}