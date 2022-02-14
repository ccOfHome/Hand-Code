const  combinationSum = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b)
    backtrack(0, target, [])
    return res

    function backtrack(index, restTarget, track) {
        // 空数组 || target === 0
        if(restTarget === 0) {
            res.push(track)
            return
        }

        for(let i = index; i < candidates.length; i++ ) {
            if(candidates[i] > restTarget) break
            backtrack(i, restTarget - candidates[i], [...track, candidates[i]])
        }
    }
}


