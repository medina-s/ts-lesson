"use strict";
//count is type of number
var count = 5;
count = 10;
// count = "Medina"
//const's type is a literal
var fname = "Medina";
var testing;
testing = "Medina";
testing = 5;
var student = {
    fname: "Medina",
    lname: "Anderson",
    grade: 12,
};
function toString(student) {
    return JSON.stringify(student);
}
console.log(toString(student));
console.log(add(5, testing));
function add(x, y) {
    var result = x + y;
    return result;
}
//Tuple JS
function sendMessage() {
    var tmp = Math.round((Math.random()));
    console.log(tmp);
    if (tmp = 1) {
        return ["success", {
                fname: "Medina",
                lname: "Anderson",
                grade: 12
            }];
    }
    else {
        return ["failure", "something failed"];
    }
}
for (var i = 0; i < 10; i++) {
    var _a = sendMessage(), statusResult_1 = _a[0], data_1 = _a[1];
    if (statusResult_1 == "success")
        console.log(data_1);
}
var _b = sendMessage(), statusResult = _b[0], data = _b[1];
if (statusResult == "success")
    console.log(statusResult);
