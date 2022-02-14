function mergeTwoLists(l1, l2) {
    // 虚拟头节点 - 有了 dummy 节点这个占位符，可以避免处理空指针的情况，降低代码的复杂性
    let dummy = new ListNode(-1)
    let p = dummy
    let p1 = l1
    let p2 = l2

    while(p1 != null && p2 != null) {
        if(p1.val <= p2.val) {
            p.next = p1
            p1 = p1.next
        } else if(p1.val > p2.val) {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }

    // while(p1 != null) {
    //     p.next = p1
    //     p1 = p1.next
    // }

    // while(p2 != null) {
    //     p.next = p2
    //     p2 = p2.next
    // }

    if(p1 != null) {
        p.next = p1
    }

    if(p2 != null) {
        p.next = p2
    }

    return dummy.next
}

function ListNode(val, next) {
    this.val = val
    this.next = next
}
