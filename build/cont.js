"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow"; //2
})(Color || (Color = {}));
console.log(Color.Red);
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings("2", "5");
// Guard .. Type Guards
if (typeof z == "string") {
    z.toUpperCase();
}
// [1,2,3, "hello"]
let myObj;
myObj = [1, 2, 3];
if (myObj instanceof Array) {
    myObj.map(() => { });
    console.log(myObj);
}
else {
    let keys = Object.values(myObj);
    console.log(keys);
}
// type
// interface
