export { }

// 输入什么，输出什么
function outputInputSingle<T>(arg: T): T {
  return arg
}
const f1 = outputInputSingle(1)

// 输入多个，输出多个
function outputInput<T extends any[]>(...args: T): T {
  return args
}

const f2 = outputInput(1, 2, 4, "a")
const f3 = outputInput(1)

type SameInputOutput = <T extends any[]>(...args: T) => T

const f4: SameInputOutput = (a, b, c) => {
  return [a, b, c]
}

function fn<T>(arg: T): T {
  return arg
}

// 方式一
const f5: <T>(arg: T) => T = fn

// 方式二
const f6: { <T>(arg: T): T } = fn

// 方式三
interface TypeFn {
  <T>(arg: T): T
}
const f7: TypeFn = fn

interface TypeFn2<T> {
  (arg: T): T
}
const f8: TypeFn2<number> = fn

// 泛型类
class Type3<T> {
  value: T | undefined
  add: ((x: T, y: T) => T) | undefined
}

const f9 = new Type3<number>()

f9.value = 20
f9.add = function (x, y) {
  return x + y
}

// 泛型约束
function fn2<T extends { length: number }>(arg: T): T {
  console.log(arg.length)
  return arg
}
fn2(1)
fn2("12")
fn2([])
fn2({ length: 2 })

function fn3<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
fn3({ a: 1, b: 2, c: 3 }, 'a')
fn3({ a: 1, b: 2, c: 3 }, 'd')
