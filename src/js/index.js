var a = "123";
console.log(a);
console.log(1);
var b;
// const addBtn: HTMLButtonElement | null = document.querySelector("#add-btn");
var addBtn = document.querySelector("#add-btn");
console.log(addBtn);
addBtn.addEventListener("click", function (e) {
    console.log(e);
});
// function connect(a: T<>, b: T<>): <T> {
//   return a + b
// }
["a", "B", "12"].forEach(function (v) {
    console.log(v.toUpperCase());
});
var p1 = {
    name: "Tom",
    age: 20
};
console.log(p1);
function fn1(person) {
    var _a;
    return "".concat(person.name, " is ").concat(person.age, " and like ").concat((_a = person.hobbies) === null || _a === void 0 ? void 0 : _a.join(", "), " etc.");
}
console.log(fn1(p1));
function fn2(obj) {
    if (typeof obj === "number") {
        return obj.toString();
    }
    else {
        return obj.toUpperCase();
    }
}
var p23 = {
    name: "Tom",
    age: 20
};
console.log(p23);
var c = {
    name: "Jack",
    age: 20,
    address: ""
};
var d = {
    name: "",
    age: 0,
    location: ""
};
console.log(typeof d);
var e = "hello";
// console.log(e.toFixed(2));
var f = {
    name: "zs",
    age: 20
};
console.log(f);
function fn3(name, /* direction: "left" | "right",  */ obj) { }
var ops = { name: "Tom", direction: "left", obj: { name: "J", age: 20 } };
// ops.direction = "right";
// ops.obj = {}
fn3(ops.name, /* ops.direction as "right", */ ops.obj);
