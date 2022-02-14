const merge = function (nums1, m, nums2, n) {
    // num1指针
    let p1 = m - 1
    // num2指针
    let p2 = n - 1
    // 存放指针
    let cur = m + n - 1
    // 从后往前插入排序
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[cur] = nums1[p1]

            p1--
        } else {
            nums1[cur] = nums2[p2]

            p2--
        }
        cur--
    }
    // 剩下的数据添加到nums1前面
    while (p2 >= 0) {
        nums1[cur] = nums2[p2]
        p2--
        cur--
    }
}