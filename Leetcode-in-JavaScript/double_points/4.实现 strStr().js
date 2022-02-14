// 朴素算法-双指针
const strStr = function (haystack, needle) {
    // 字符串长度
    let len1 = haystack.length,
        len2 = needle.length
    // 空查询字符串
    if (len2 === 0) return 0
    // 查询字符串长度大于原字符串
    if (len1 < len2) return -1

    // i是haystack上的指针
    for (let i = 0; i <= len1 - len2; i++) {
        // j是needle上的指针
        let j = 0
        while (j < len2) {
            // 匹配不上跳出循环
            if (haystack[i + j] !== needle[j]) break
            // 匹配上j指针移动
            j++
        }
        // j等于needle指针相等就找到子字符串的位置了
        if (j === len2) {
            return i
        }
    }
    return -1
}

// KMP算法