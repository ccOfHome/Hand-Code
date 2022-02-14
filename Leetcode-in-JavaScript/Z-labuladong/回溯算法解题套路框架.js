// 全排列 决策树 DFS
// 复杂度O(N)
let res = []
function permute(nums){
    let track = []
    backtrack(nums, track)
    return res
}

function backtrack(nums, track){
    if(track.length == nums.length) {
        // 数据保存
        let arr = [...track]
        res.push(arr)
        return
    }
    
    for(let i = 0; i < nums.length; i++) {
        // 排除不合法选择
        if(track.indexOf(nums[i]) != -1) continue
        // 选择
        track.push(nums[i])
        // 进入下一层决策树
        backtrack(nums, track)
        // 取消选择
        track.pop()
    }
}


// N 皇后问题 最坏复杂度O(N^(N + 1))
// '.'表示空 'Q'表示皇后
let res1 = []
function solveNQueens(n) {
    let board = new Array(n)
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }
    console.log(board)
    backtrack1(board, 0)
    return res1
}

function backtrack1(board, row){
    // 触发结束条件
    if(row == board.length){
        res.push(board)
        return
    }

    let n = board[row].length
    for(let col = 0; col < n; col++) {
        // 排除不合法选择
        if(!isValid(board, row, col)) continue
        // 做选择
        board[row][col] = 'Q'
        // 进入下一行决策
        backtrack1(board, row + 1)
        // 撤销选择
        board[row][col] = '.'
    }
}

// 是否可以在board[row][col]防止皇后 ？
function isValid(board, row, col) {
    let n = board.length
    // 检查列是否有皇后互相冲突
    for(let i = 0; i < n; i++) {
        if(board[i][col] == 'Q') return false 
    }

    // 检查右上方是否有皇后互相冲突
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if(board[i][j] == 'Q') return false
    }

    // 检查左上方是否有皇后互相冲突
    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if(board[i][j] == 'Q') return false
    }

    return true
}


// 解数独（只想要一个答案）
function backtrack2(board, row) {
    // 触发结束条件
    if(row == board.length){
        res.push(board)
        return true
    }

    let n = board[row].length
    for(let col = 0; col < n; col++) {
        // 排除不合法选择
        if(!isValid(board, row, col)) continue
        // 做选择
        board[row][col] = 'Q'
        // 进入下一行决策
        if(backtrack2(board, row + 1)) return true
        // 撤销选择
        board[row][col] = '.'
    }
    return false
}


