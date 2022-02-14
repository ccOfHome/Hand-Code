
// 二叉树最小深度
function minDepth(root) {
    if(root == null) return 0
    // 模拟队列
    let q = new Array()
    q.push(root)
    // root本身就是一层，depth初始化为1
    let depth = 1

    while(!q.length) {
        let len = q.length
        // 将当前队列中的所有节点向四周扩散
        for(let i = 0; i < len; i++) {
            // 取出头部元素
            let cur = q.shift()
            // 判断是否到达终点
            if(cur.left == null && cur.right == null) return depth
            // 将cur相邻节点加入队列
            if(cur.left != null) q.push(cur.left)
            if(cur.right != null) q.push(cur.right) 
        }
        // 增加步数
        depth++
    }
    return depth
}


// 解开密码锁的最少次数
function openLock(deadends, target) {
    // 记录需要跳过的死亡密码
    let deads = new Set()
    for(let s of deadends) deads.add(s)
    // 记录已经穷举过的密码，防止走回头路
    let visited = new Set()
    let q = new Array()
    // 从起点开始启动广度优先遍历
    let step = 0
    q.add('0000')
    visited.add('0000')

    while(!q.length) {
        let len = q.length
        // 将当前队列中所有节点向周围扩散
        for(let i = 0; i < len; i++) {
            let cur = q.shift()
            // 判断是否到达终点
            if(deads.indexOf(cur) != -1) continue
            if(cur == target) return step
            // 将一个节点的未遍历相邻节点加入队列
            for(let j = 0; j < 4; j++) {
                let up = plusOne(cur, j)
                if(visited.indexOf(up) == -1){
                    q.add(up)
                    visited.add(up)
                }
                let down = minusOne(cur, j)
                if(visited.indexOf(down) == -1) {
                    q.offer(down)
                    visited.add(down)
                }
            }
        }
        // 增加步数
        step++
    }
    // 穷举完都没有找到目标密码
    return -1
}

// s[j]向上拨动一次
function plusOne(s, j) {
    let ch = s.split('')
    if(ch[j] == '9') {
        ch[j] = '0'
    }else {
        ch[j] += 1
    }
    return ch.join('')
}

// s[j]向下拨动一次
function minusOne(s, j) {
    let ch = s.split('')
    if(ch[j] == '0') {
        ch[j] = '9'
    }else {
        ch[j] -= 1
    }
    return ch.join('')
}

// 小小优化点
// 可以不需要 dead 这个哈希集合，可以直接将这些元素初始化到 visited 集合中，效果是一样的，可能更加优雅一些

// 双向BFS优化 - 前提是需要知道终点在哪
function openLock1(deadends, target) {
    let deads = new Set()
    for(let s of deadends) deads.add(s)
    // 使用集合不用队列，可以判断元素是否存在
    let q1 = new Set()
    let q2 = new Set()
    let visited = new Set()

    let step = 0
    q1.add('0000')
    q2.add(target)

    while(q1.size != 0 && q2.size != 0) {
        // 哈希集合在遍历的过程中不能修改，使用temp存储扩散结果
        let temp = new Set()
        // 将q1中所有节点向周围扩散
        for(let cur of q1) {
            // 判断是否到达终点
            if(deads.indexOf(cur) != -1) continue
            if(q2.indexOf(cur) != -1) continue
            visited.add(cur)
            // 将一个节点的未遍历相邻节点加入集合
            for(let j = 0; j < 4; j++) {
                let up = plusOne(cur, j)
                if(visited.indexOf(up) == -1) temp.add(up)
                let down = minusOne(cur, j)
                if(visited.indexOf(down)) temp.add(down) 
            }
        }
        step++
        // 交换q1,q2 下一轮while就是扩散q2
        q1 = q2
        q2 = temp
    }
    return -1
}

// 小小优化点-在while循环开始时做一个判断
while (!q1.isEmpty() && !q2.isEmpty()) {
    if (q1.size() > q2.size()) {
        // 交换 q1 和 q2
        temp = q1;
        q1 = q2;
        q2 = temp;
    }
    // ...
}


