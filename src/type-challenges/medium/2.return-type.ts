// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

export { }

type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : void

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}
type a = MyReturnType<typeof fn> // should be "1 | 2"

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}
type b = MyReturnType<() => ComplexObject>

const fn2 = (v: number) => {
  if (v > 0) {
    return 1
  } else if (v < 0) {
    return -1
  }
  return 0
}

type c = MyReturnType<typeof fn2>
type d = MyReturnType<() => 1 | 2 | 3>
type e = MyReturnType<() => void>
