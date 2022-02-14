const moveZero = function() {
    // j慢指针 i快指针
    for(let i = 0, j = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }
}

