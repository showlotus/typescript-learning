export { }

interface Box<T> {
  contents: T
}

const a: Box<string> = { contents: '' }
const b: Box<number> = { contents: 11 }
const c: Box<number[]> = { contents: [1, 2] }

let d: ReadonlyArray<string> = ['1']
let e: readonly number[] = [2, 3]

// d = e

const point = [1, 2] as const
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2)
}
// distanceFromOrigin(point) // error
