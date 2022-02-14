const combine = function (n, k) {
    let res = []
    backtrack(k, [], 1)
    return res
    
    function backtrack(k, path, start) {
        if(k === 0) {
            res.push([...path])
            return
        }

        for(let i = start; i <= n; i++) {
            path.push(i)
            backtrack(k - 1, path, i + 1)
            path.pop()
        }
    }
}

