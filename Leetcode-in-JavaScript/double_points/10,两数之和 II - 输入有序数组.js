const twoSum = function (numbers, target) {
    // 有序数组长度
    let size = numbers.length
    // 头指针
    let lp = 0
    // 尾指针
    let rp = size - 1

    while (lp < rp) {
        // 找到
        if (numbers[lp] + numbers[rp] === target) {
            return [lp + 1, rp + 1]
        } else if (numbers[lp] + numbers[rp] < target) {
            lp++
        } else {
            rp--
        }
    }
    return []
}
