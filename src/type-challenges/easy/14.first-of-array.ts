// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

export { }

type First<T> = T extends [infer First, ...any] ? First : never

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3



type a = { name: string }
type b = { name: string, age: number }

let A: a = { name: 'zs' }
let B: b = { name: ' zs', age: 20 }

// b 是 a 的子集
A = B // no error
// B = A // error


