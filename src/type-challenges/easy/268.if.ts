// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

export { }

type If<C, T, F> = C extends true ? T : F

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
