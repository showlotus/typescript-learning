// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

export { }

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type TodoPreview = MyPick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}
