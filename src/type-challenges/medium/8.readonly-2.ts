// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

export { }

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

const todo2: MyReadonly2<Todo> = {
  title: 't',
  description: 't',
  completed: true
}

todo2.completed = false
