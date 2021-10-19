import { LinkStack } from './Stack.js'

/**
 * 将一个十进制数字转为八进制
 * @param {number} n
 * @return
 */
const conversion = n => {

    if (n < 8) return n
    const stack = new LinkStack

    while(n >= 8) {
        const s = n % 8
        stack.push(s)
        n = Math.floor(n / 8)
    }

    console.log(stack)

    stack.push(n)

    let res = ''


    while(stack.getTop() !== undefined) {
        res += stack.pop()
    }

    return res
}

console.log(conversion(8))