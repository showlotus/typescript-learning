// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

export { }

type Unshift<T extends any[], K> = [K, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
type a1 = Unshift<[], 0>
