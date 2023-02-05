// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

export { }

// T 中排除 U
type MyExclude<T, U> = T extends U ? never : T

// T 中选择 K
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>

interface Todo {
  title: string
  description: string
  completed: boolean
}

type a = MyExclude<keyof { a: string, b: string }, 'a'>
type b = keyof Todo
type c = {
  [K in keyof Todo]: string
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
