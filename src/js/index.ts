let a = "123";
console.log(a);
console.log(1);
let b;

const addBtn: HTMLButtonElement | null = document.querySelector("#add-btn");
console.log(addBtn);
addBtn?.addEventListener("click", (e: MouseEvent) => {
  console.log(e);
});

// function connect(a: T<>, b: T<>): <T> {
//   return a + b
// }

["a", "B", "12"].forEach(v => {
  console.log(v.toUpperCase());
});

interface Person {
  name: string;
  age: number;
  hobbies?: string[];
}

let p1: Person = {
  name: "Tom",
  age: 20,
  // hobbies: ["12"],
};

console.log(p1);

function fn1(person: Person) {
  return `${person.name} is ${person.age} and like ${person.hobbies?.join(", ")} etc.`;
}

console.log(fn1(p1));

function fn2(obj: number | string) {
  if (typeof obj === "number") {
    return obj.toString();
  } else {
    return obj.toUpperCase();
  }
}

type P2 = {
  name: string;
  age: number;
};

let p23: P2 = {
  name: "Tom",
  age: 20,
};

console.log(p23);

interface P_TWO extends Person {
  address: string;
}

let c: P_TWO = {
  name: "Jack",
  age: 20,
  address: "",
};

type P3 = P2 & {
  location: string;
};

let d: P3 = {
  name: "",
  age: 0,
  location: "",
};

console.log(typeof d);

let e = "hello" as any as number;
// console.log(e.toFixed(2));

let f: { name: "zs"; age: 20 } = {
  name: "zs",
  age: 20,
};

console.log(f);

function fn3(name: string, /* direction: "left" | "right",  */ obj: {}): void {}

const ops = { name: "Tom", direction: "left", obj: { name: "J", age: 20 } };
// ops.direction = "right";
// ops.obj = {}
fn3(ops.name, /* ops.direction as "right", */ ops.obj);

const removeBtn: HTMLButtonElement = document.querySelector("#remove-btn")!;
console.log(removeBtn);
