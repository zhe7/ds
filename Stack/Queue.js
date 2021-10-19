import { SingleList } from "../LinkedList/SingleList.js";
/**
 * 队列
 */
export class Queue extends SingleList {
    constructor (...items) {
        super(...items)
    }

    pop () {
        return this.delete(0)
    }


}

const q = new Queue('a')
q.push('b')
q.push('c')
q.push('d')
q.push('e')

console.log(q)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q)