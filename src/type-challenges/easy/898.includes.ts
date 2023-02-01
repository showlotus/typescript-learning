// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

export { }

// 强类型相等
type EqualStrong<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => (T extends Y ? 1 : 2) ? true : false;

// 弱类型相等
type EqualWeak<X, Y> = X extends Y ? Y extends X ? true : false : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ?
  EqualStrong<First, U> extends true ? true : Includes<Rest, U>
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type a1 = EqualStrong<1, 1>
type a2 = EqualWeak<{}, { a: 1 }>
type a3 = EqualWeak<string | number, number>
