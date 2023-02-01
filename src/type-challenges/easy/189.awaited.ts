// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

export { }

type MyAwaited<T> = T extends PromiseLike<infer K> ?
  K extends PromiseLike<any> ? MyAwaited<K> : K
  : undefined

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type A = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type X1 = MyAwaited<X>
type Y1 = MyAwaited<Y>
type Z1 = MyAwaited<Z>
type A1 = MyAwaited<A>
type T1 = MyAwaited<T>
