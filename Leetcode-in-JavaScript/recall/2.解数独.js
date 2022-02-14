const solveSudoku = function (board) {
    let len = 9
    // 为了方便遍历 转ASC码
    let charCode1 = '1'.charCodeAt()
    let charCode9 = '9'.charCodeAt()

    backtrack(board, 0, 0)
    return board

    function backtrack(board, i, j) {
        // 到最后一行，结束回溯
        if (i >= len) return true
        // 到最后一列，进入下一行遍历
        if (j >= len) return backtrack(board, i + 1, 0)
        // 若已有预设值，则跳过
        if (board[i][j] !== '.') return backtrack(board, i, j + 1)

        for (let charCode = charCode1; charCode <= charCode9; charCode++) {
            // ASC码转回字符
            let ch = String.fromCharCode(charCode)
            
            if (isValid(i, j, ch)) {
                board[i][j] = ch
                // 找到可行解，直接填入并找下一个空，剪枝，不用回溯了
                if (backtrack(board, i, j + 1)) {
                    return true
                }
                board[i][j] = '.'
            }
        }
    }

    function isValid(row, col, num) {
        for (let i = 0; i < len; i++) {
            // 判断所在行所在列有无重复数字
            if (board[row][i] === num || board[i][col] === num) return false;
        }
        // 判断所在九宫格内有无重复数字
        const rowStart = row - (row % 3);
        const colStart = col - (col % 3);
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }
        return true;
    }
}