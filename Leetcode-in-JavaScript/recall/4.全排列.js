const permute = function (nums) {
    let res = []
    backtrack(nums, [])
    return res

    function backtrack(rest, path) {
        if(rest.length === 0) {
            res.push(path)
            return
        }

        rest.forEach((num) => {
            backtrack(rest.filter(ele => ele !== num), [...path, num])
        })
    }
}

