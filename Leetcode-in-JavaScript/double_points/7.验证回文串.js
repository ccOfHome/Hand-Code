const isPalindrome = function(s) {
    // 字符串统一
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    // 头指针
    let p1 = 0
    // 尾指针
    let p2 = str.length - 1

    while(p1 < p2) {
        // 只要有一个不相等就直接返回
        if(str[p1] !== str[p2]) {
            return false
        }
        // 指针移动
        p1++
        p2--
    }
    return true
}

