const generateParenthesis = function (n) {
    let res = []
    backtrack('', n, n)
    return res

    function backtrack(str, left, right) {
        // 剪枝 当左括号或右括号剩余个数<0 || 剩余的左括号的数量大于剩余的右括号
        if (left < 0 || right < 0 || left < right) return

        if (left === 0) {
            str += ')'.repeat(right)
            res.push(str)
            return
        }
        backtrack(str + '(', left - 1, right)
        backtrack(str + ')', left, right - 1)
    }
}

// 用递归来解，本质上就是一次二叉树的深度优先遍历。难点关键在于如何剪枝，减少不必要的递归次数