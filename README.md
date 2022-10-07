# TypeScript

## 类型别名（type）

将对象类型或者联合类型，通过一个单独的名称来引用。

```ts
type Person = {
  name: string;
  age: number;
};

const p: Person = {
  name: "Tom",
  age: 20,
};

type ID = number | string;

let pId: ID = 123;
pId = "123";
```

不能重新创建。

```ts
type ID = number | string;

type ID = string; // Duplicate identifier 'ID'.
```

使用交集扩展属性，同时创建一个新的类型。

```ts
type P2 = Person & {
  address: string;
};

const p: P2 = {
  name: "Tom",
  age: 20,
  address: "...",
};
```

## 接口（interface）

命名对象类型的另一种方式。

```ts
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "Tom",
  age: 20,
};
```

在原接口上扩展新属性。

```ts
interface Person {
  address: string;
}

const p: Person = {
  name: "Tom",
  age: 20,
  address: "...",
};
```

使用继承扩展属性，同时创建一个新的接口。

```ts
interface P2 extends Person {
  address: string;
}

const p: P2 = {
  name: "Tom",
  age: 20,
  address: "...",
};
```

使用继承创建的接口也可以扩展。

```ts
interface P2 {
  family: string;
}

const p: P2 = {
  name: "Tom",
  age: 20,
  address: "...",
  family: "...",
};
```

## 类型断言

指名当前值的类型。

```ts
const button = document.querySelector(".btn") as HTMLButtonElement;

// 因为 document.querySelector(".btn") 有可能为 null
// 这时候使用联合类型也可以
const button: HTMLButtonElement | null = document.querySelector(".btn");

// 或者，使用尖括号语法（不能在 .tsx 中使用）
const button = <HTMLButtonElement>document.querySelector(".btn");
```

如果规则有时候太过苛刻，阻止了原本有效的类型转换，可以使用双重断言，先断言为 `any` 或者 `unknown`，再断言为期望的类型。

```ts
const a = exp as any as number;
```

## 字面量类型

将类型声明为更具体的数字或者字符串。

```ts
let a: 0 = 0;

// 等同于
const a = 0;
```

搭配联合类型。

```ts
let a: 0 | 1 | 2;
let direction: "left" | "top" | "right" | "bottom";
```

`boolean` 类型其实就是联合类型 `true | false` 的别名。

### 字面量推断

```ts
function fn(name: string, direction: "left" | "right"): void {}

const ops = { name: "Tom", direction: "left" };
fn(ops.name, ops.direction);
// Argument of type 'string' is not assignable to parameter of type '"left" | "right"'.
```

因为 `ops.direction` 可能会被更改，所以将 `ops.direction` 推断为 `string`，而不是 `left`。
常用的两种解决方法：

1. 添加类型断言改变推断结果：

   ```ts
   const ops = { name: "Tom", direction: "left" as "left" };
   fn(ops.name, ops.direction as "left");
   ```

   不过这会导致 `ops.direction` 不能被修改为其他值

2. 使用 `as const` 将整个对象转为一个类型字面量：

   ```ts
   const ops = { name: "Tom", direction: "left" } as const;
   fn(ops.name, ops.direction);
   ```

   设置为类型字面量后，对象的各个属性都无法更改，类似于 `const` 定义的常量。

   ```ts
   const ops = { name: "Tom", direction: "left" } as const;
   ops.direction = "right";
   // Cannot assign to 'direction' because it is a read-only property.
   ```
