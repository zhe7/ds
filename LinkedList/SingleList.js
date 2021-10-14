import { Node } from './Node.js'

/**
 * 单链表
 */


export class SingleList {
    head
    tail
    length = 0
    constructor (...items) {
        items.forEach(item => {
            this.push(item)
        })
    }

    get (i) {
        if (i >= this.length ) return null
        let j = 0
        let ele = this.head
        while( j < i ) {
            ele = ele.next
            j += 1
        }
        return ele

    }

    findIndex (item) {
        let j = 0
        let node = this.head

        while(node) {
            if (node.data === item) {
                return j
            }
            node = node.next
            j += 1
        }
        return -1
    }

    push (item) {
        const node = new Node(item)
        if (!this.head) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length ++
    }

    insert (i, item) {
        if (i >= this.length) return new Error('超出范围')
        const node = new Node(item)
        const target = this.get(i)

        node.next = target.next
        target.next = node

        if (i === this.length -1) {
            this.tail = node
        }

        this.length += 1

    }

    insertBefore(i, item) {
        const node  = new Node(item)
        if (i === 0) {

            node.next = this.head
            this.head = node
        } else {
            const target = this.get(i - 1)
            node.next = target.next
            target.next = node
        }

        this.length += 1
    }

    delete (i) {
        if (i >= this.length) return new Error('超出范围')

        const node = this.get(i)
        const prev = this.get(i - 1)

        if (i === 0) {
            this.head = node.next
        } else {
            prev.next = node.next
            if (!node.next) this.tail = prev
        }

        this.length -= 1
        return node.data
    }


}
