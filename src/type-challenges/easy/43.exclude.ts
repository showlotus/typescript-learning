// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

export { }

type MyExclude<T, U> = T extends U ? never : T

// 联合类型上调用 extends 时
// 相当于每个类型都判断一次
// 最后还返回一个联合类型

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
