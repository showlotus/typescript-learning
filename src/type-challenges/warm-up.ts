export { }


// Object keys
type ObjectKeys<T> = keyof T
type aKeys = ObjectKeys<{ name: 'zs', age: 20 }>

// Object values
type ObjectValues<Object> = Object[keyof Object]
type aValues = ObjectValues<{ name: 'zs', age: 20 }>

// 向数组里添加新元素 append 
type AppendTuple<Tuple extends any[], Element> = [...Tuple, Element]
type a = AppendTuple<[1, 2], 3>

// 数组长度加1
type LengthAddOne<Tuple extends any[]> = [...Tuple, any]['length']
type a1 = LengthAddOne<[1]>

// 元组转数组 
type TupleToArray<Tuple extends any[]> = Array<Tuple[number]>
type a2 = TupleToArray<[number, string]>

// 判断是否是数组
type IsArray<T> = T extends any[] ? true : false
type a3 = IsArray<1>

// 判断 key 是否存在于 object，若有则返回，否则返回 undefined
type GetProp<Object, Key> = Key extends keyof Object ? Object[Key] : undefined
type a4 = GetProp<{ name: 'zs' }, 'age'>
type a5 = GetProp<{ name: 'zs' }, 'name'>

// TS 中有关循环的操作就是通过递归实现
// Array.map
type ArrayMap<List> = List extends [infer First, ...infer Rest] ? [{ name: First }, ...ArrayMap<Rest>] : []
type a6 = ArrayMap<[1, 2, 3]>

// Array.filter
// 过滤出 number 类型
type ArrayFilterNumber<List> = List extends [infer First, ...infer Rest] ? First extends number ? [First, ...ArrayFilterNumber<Rest>] : ArrayFilterNumber<Rest> : []
type a7 = ArrayFilterNumber<[1, 2, '3']>

// Array.slice(0, N)
// 取数组前 N 项
type ArrayTakeBeforeN<List, N, Output extends any[] = []> = List extends [infer First, ...infer Rest] ?
  Output['length'] extends N ?
  Output :
  ArrayTakeBeforeN<Rest, N, [...Output, First]>
  : Output
type a8 = ArrayTakeBeforeN<[1, 2, 3, 4], 2>

// first of array
type FirstOfArray<T> = T extends [infer First, ...any[]] ? First : never
type c1 = FirstOfArray<[1, 2]>
type c2 = FirstOfArray<[number, string]>

type Arr = number[]
type c3 = Arr[number]
