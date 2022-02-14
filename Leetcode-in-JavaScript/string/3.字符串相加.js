const addStrings  = function(num1, num2) {
    // 计算长度
    let i = num1.length - 1
    let j = num2.length - 1

    // 处理成相同长度
    if(i < j) num1 = '0'.repeat(j - i) + num1
    if(i > j) num2 = '0'.repeat(i - j) + num2

    let res = ''
    let count = 0 // 往前进的值
    for(let k = Math.map(i, j); k >= 0; k--) {
        // 该位置的和
        let temp = Number(num1[k]) + Number(num2[k]) + count
        // 进值
        count = temp > 9 ? 1 : 0
        // 该位置的值
        res  = temp % 10 + res
    }
    // 新增一位
    if(count === 1) res = '1' + res
    return res
}


