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

const f2 = outputInput(1, 2, 4, 'a')
const f3 = outputInput(1)

type SameInputOutput = <T extends any[]>(...args: T) => T

const f4: SameInputOutput = (a, b, c) => {
  return [a, b, c]
}
