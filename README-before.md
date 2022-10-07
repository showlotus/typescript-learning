# TypeScript

## JavaScript 痛点

- 当初设计的时候，就是直接在运行环境运行，没有编译过程，为了方便就设计成弱类型
- 而如今面对庞大的前端生态，弱类型无法满足需求，运行时，才会报错

## 强类型的优点

- 错误更早暴露
- 代码更智能，编码更准确
- 重构更可靠（修改某个方法名）
- 减少不必要的类型判断

## Flow

### 初始化

#### 安装检查工具

```shell
yarn add flow-bin -D
```

#### 添加配置文件 `.flowconfig`

```shell
yarn flow init
```

#### 在需要检查的 js 文件头部添加标记

```js
// @flow

/* ... */
```

#### 启动 flow （首次启动会慢一点）

```shell
yarn flow
```

### 移除类型注解

#### 安装 flow-remove-types

```shell
yarn add flow-remove-types -D
```

#### 执行

```shell
yarn flow-remove-types [源目录] -d [输出目录]
```

#### 第三方移除 `babel`

- 安装
  ```shell
  yarn add @babel/core @babel/cli @babel/preset-flow -D
  ```
- 添加配置文件 `.babelrc`

  ```json
  {
    "presets": ["@babel/preset-flow"]
  }
  ```

- 执行

  ```shell
  yarn babel [源目录] -d [输出目录]
  ```

#### VSCode 插件 `Flow Language Support`

### 类型

#### 基本类型

```js
const a: number = 1
const b: string = "2"
const c: boolean = false
const d: null = null
const e: void = undefined
const f: symbol = Symbol()
```

#### 数组类型

```js
const foo: Array<number> = [1, 2, 4]

const bfa: number[] = [1, 2, 3]

// 元组
const bar: [string, number] = ["1", 2]
```

#### 对象类型

```js
const obj1: { foo: string, bar: number } = { foo: "1", bar: 2 }

// 属性foo可有可无
const obj2: { foo?: string, bar: number } = { bar: 1 }

// 键和值都是字符串类型
const obj3: { [string]: string } = { key: "value" }
```

#### 函数类型

```js
function foo (callback: (string, number)): void {
  callback("string", 100)
}
```

#### 特殊类型

```js
// 联合类型
const type: "success" | "warning" | "error"

const f: string | number

// 类型别名
type StringOrNumber = string | number

const a: StringOrNumber = "124"

// maybe类型
const b: ?number = 12
=> const b: number | null | void = 12

// mixed 所有类型的联合类型
const
```
