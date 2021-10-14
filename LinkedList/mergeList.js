import { SingleList } from "./SingleList.js"

/**
 * 合并有序列表
 *
 */

export const mergeList = (a, b) => {
    const list = new SingleList()
    let pa = a.head
    let pb = b.head

    while( pa || pb) {
        if (!pa) {
            list.push(pb.data)
            pb = pb.next
        } else if (!pb) {
            list.push(pa.data)
            pa = pa.next
        }else if (pa.data < pb.data) {
            list.push(pa.data)
            pa = pa.next
        } else if (pa.data >= pb.data) {
            list.push(pb.data)
            pb = pb.next
        }
    }

    return list
}

/**
 * 复用原本的链表空间
 * @param {SingleList} a
 * @param {SingleList} b
 */
const mergeList2 = (a, b) => {
    let pa = a.head
    let pb = b.head
    let pc

    while(pa || pb) {

    }
}

const a = new SingleList(3,5,8,11)
const b = new SingleList(2, 6, 8, 9, 11, 15, 20)
const newList = mergeList(a, b)
console.log(newList)
