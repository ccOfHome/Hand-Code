const longestCommonPrefix = function(strs) {
    // 传入空数组
    if(strs.length <= 0) return ''
    // 
    for(let i = 0; i < strs[0].length; i++) {
        // 每个元素第i个位置判断
        let flag = strs.every(str => str[i] === strs[0][i])
        // 发现没有相等时
        if(!flag) {
            return strs[0].substring(0, i)
        }
    }
    return strs[0]
}