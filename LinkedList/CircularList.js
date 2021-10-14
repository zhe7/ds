import { SingleList } from "./SingleList.js"
import { Node } from "./Node.js"
/**
 * 循环链表
 */


export class CircularList extends SingleList {
    constructor (...items) {
        super(...items)
    }

    push(item) {
        const node = new Node(item)

        if (!this.tail) {
            this.tail = node
            this.head = node

        } else {
            this.tail.next = node
            this.tail = node
        }

        node.next = this.head
        this.length ++
    }

    concat (list) {
        this.tail.next = list.head
        this.tail = list.tail
        this.tail.next = this.head
        this.length += list.length
    }
}

const list = new CircularList('a', 'b', 'c')
console.log(list)
const list2 = new CircularList('d', 'e')
list.concat(list2)
console.log(list)