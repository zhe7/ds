import { SingleList } from '../LinkedList/SingleList.js'

/**
 * 链栈
 */

export class LinkStack{
    list
    constructor (...items) {
        this.list = new SingleList(...items)
    }

    // 入栈
    push (item) {
        this.list.insertBefore(0, item)
    }

    // 出栈
    pop () {
        return this.list.delete(0)
    }

    getTop () {
        return this.list.length > 0 ? this.list.get(0).data : undefined
    }
}

/**
 * 阶乘函数
 * @param {number} n
 * @returns
 */
const fact = n => {
    if (n === 0) return 1
    return n * fact(n - 1)
}

console.log(fact(5))

/**
 * 斐波那契
 * @param {number} n
 */
const fib = n => {
    if (n === 1) return 1
    if (n === 2) return 1
    return fib(n -1) + fib(n - 2)
}

console.log(fib(10))
