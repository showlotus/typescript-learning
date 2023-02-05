export { }

// 重载
// function len(s: string): number
// function len(arr: any[]): number
function len(x: any[] | string) {
  return x.length
}

len('ss')
len([1, 2, 3])
len(Math.random() > 0.5 ? 'hhh' : [0])

// this
const user = {
  name: 'zs',
  getName() {
    return this.name
  },
  setName(val: string) {
    this.name = val
  }
}

// 返回 void
// 函数字面量定一个返回一个 void 类型后，函数一定不能返回任何东西
function f1(): void {
  return
}
