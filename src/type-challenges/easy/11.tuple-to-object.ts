// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

export { }

type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}



type E<T extends string[]> = {
  readonly [Key in T[number]]: any
}
function gen<T extends string[]>(...props: T): E<T> {
  const obj: E<T> | any = {}
  for (const key of props) {
    obj[key] = key
  }
  return obj
}

const a = gen<["name", "age"]>("name", "age")
console.log(a.name, a.age);

const b = gen<[]>()
console.log(b);
