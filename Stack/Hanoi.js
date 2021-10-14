import { LinkStack } from './Stack.js'

/**
 * Hanoi塔
 */

/**
 * 移动 从from 移动第i个到to
 * @param {list} from
 * @param {number} i
 * @param {list} to
 */
const move = (from, to) => {
    const item = from.pop()
    to.push(item)
}

/**
 *
 * @param {number} n 表示盘子的数量
 * @param {list} from
 * @param {list} assist 辅助支柱
 * @param {list} to 目标支柱
 */
const Hanoi = (n, from, assist, to) => {
    if (n === 1) move(from, to)
    else {
        Hanoi(n-1, from, to, assist)
        move(from, to)
        Hanoi(n-1, assist, from, to)
    }
}

const from = new LinkStack()
from.push(5)
from.push(4)
from.push(3)
from.push(2)
from.push(1)
const assist = new LinkStack()
const to = new LinkStack()

Hanoi(5, from, assist, to)
console.log(to)

