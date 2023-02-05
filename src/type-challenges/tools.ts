export { }

// Equal 严格相等
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// Alike
type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T
type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>

type a = Equal<{}, {}>
type b = Equal<[], []>
