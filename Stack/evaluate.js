import { LinkStack } from './Stack.js'

/**
 * 四则运算
 */


 const add = (a, b) => a + b
 const minus = (a, b) => a - b
 const times = (a, b) => a * b
 const div = (a, b) => Math.floor(a / b)

 const map = {
     '+' : add,
     '-': minus,
     '*': times,
     '/': div
}

// 不含括号
const calculate = s => {
    s = s.replace(/ /g, '')
    const arr = s.split(/\b/)
    const len = arr.length
    const ops = []
    const ns = []

    for (let i = 0; i < len; i ++) {
        const item = arr[i]

        if (item === '+' || item === '-') {
            // 如果前面已经有运算符了, 则进行运算
            if (ops[0]) {
                const op = ops.shift()
                const b = ns.shift()
                const a = ns.shift()
                const res = map[op](a, b)

                ns.unshift(res)
            }
            ops.unshift(item)
        } else if (item === '*' || item === '/') {
            ops.unshift(item)
        } else {
            const cur = +item

            // 如果前面已经有运算符，且运算符为 * /
            if (ops[0] && (ops[0] === '*' || ops[0] === '/')) {
                const op = ops.shift()
                const a = ns.shift()
                const res = map[op](a, cur)
                ns.unshift(res)
            } else {
                ns.unshift(cur)
            }
        }
    }

    if (ops[0]) {
        return map[ops[0]](ns[1], ns[0])
    }

    return ns[0]
}

const isTR = i => i === '+' || i === '-' || i === '*' || i === '/'

const precede = (a, b) => {
    if (a === '(') {
        if (b === ')') return '='
        return '<'
    }
    if (a === ')') return '>'
    if (a === '*' || a === '/') {
        if (b === '(') return '<'
        return '>'
    }
    if (a === '+' || a === '-') {
        if (b === '+' || b === '-' || b === ')') return '>'
        return '<'
    }
}

const operate = (a, tr, b) => {
    const an = +a || 0
    const bn = +b || 0
    switch (tr) {
        case '+':
            return an + bn
            break
        case '-':
            return an - bn
            break
        case '*':
            return an * bn
        case '/':
            return an / bn | 0
    }
}

// 包含括号
const evaluate = s => {
    const opnd = new LinkStack()
    const optr = new LinkStack()

    const length = s.length
    let n = 0

    for(let i = 0; i < length; i ++) {
        const ch = s[i]
        const chn = Number(ch)

        if (ch === ' ') continue

        if (!isNaN(chn)) {
            n = n * 10 + chn
            if (i === length - 1) {
                opnd.push(n)
            }
        }else {
            if (n > 0) {
                opnd.push(n)
                n = 0
            }

            if (ch !== '(' && optr.getTop() === '*' || optr.getTop() === '/') {
                const op = optr.pop()
                const b = opnd.pop()
                const a = opnd.pop()

                opnd.push(operate(a, op, b))
            }


            if (ch === '+' || ch === '-') {
                if (optr.getTop() === '+' || (optr.getTop() === '-')) {
                    const op = optr.pop()
                    const b = opnd.pop()
                    const a = opnd.pop()

                    opnd.push(operate(a, op, b))
                }
                optr.push(ch)
            } else if (ch === '*' || ch === '/') {
                optr.push(ch)
            } else if (ch === '(') {
                optr.push(ch)
            } else if (ch === ')') {
                if (optr.getTop() !== '(') {
                    const op = optr.pop()
                    const b = opnd.pop()
                    const a = opnd.pop()

                    opnd.push(operate(a, op, b))
                }
                optr.pop()
            }
        }
    }

    // debugger

    if (optr.getTop()) {
        const op = optr.pop()
        const b = opnd.pop()
        const a = opnd.pop()

        opnd.push(operate(a, op, b))
    }

    return opnd.getTop()
}

// 数组版  #224 https://leetcode-cn.com/problems/basic-calculator/
var calculateArray = function(s) {
    let signStack = [1]

    let n = 0
    let res = 0

    let op = '+'
    let originOp = '+'

    for (let i = 0; i < s.length; i ++) {
        const ch = s[i]
        // debugger

        if (ch === ' ') {

            continue
        }

        if (!isNaN(Number(ch))) {
            n = n * 10 + Number(ch)
        }  else {
            if (n > 0)  {
                res = op === '+' ? res + n : res - n
                n = 0
            }
            if (ch === ' ') continue
            if (ch === '+') {
                op = signStack[0] === 1 ? '+': '-'
                originOp = '+'
            }
            else if (ch === '-') {
                op = signStack[0] === 1 ? '-' : '+'
                originOp = '-'
            }
            else if (ch === '(') {
                signStack.unshift(originOp === '+' ? signStack[0] : -signStack[0])
            } else if (ch === ')') {
                signStack.shift()
            }
        }
    }

    if (n) res = op === '+' ? res + n : res -n

    return res
};

// 回文字

var isPalindrome = function(s) {
    const len = s.length
    let ai= 0
    let bi = len - 1
    let as = ''
    let bs = ''

    while (bi >= 0 || ai < len) {
        console.log(s[ai], s[bi])
        const aCode = s[ai].toLowerCase().charCodeAt()
        const bCode = s[bi].toLowerCase().charCodeAt()

        if (aCode >= 48 && aCode <= 57 || aCode >= 97 && aCode <= 122) {
            as = aCode
        } else {
            ai += 1
        }

        if (bCode >= 48 && bCode <= 57 || bCode >= 97 && bCode <= 122) {
            bs = bCode
        } else {
            bi -= 1
        }

        if (as && bs) {
            if (as === bs) {
                as = bs = ''
                ai += 1
                bi -= 1
            } else {
                return false
            }
        }

    }
    return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))