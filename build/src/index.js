"use strict";
//count is type of number
let count = 5;
count = 10;
// count = "Medina"
//const's type is a literal
const fname = "Medina";
// type any - no need to give any parameters
let testing;
// primitive types- comes form language
testing = "Medina";
testing = 5;
let student = {
    fname: "Medina",
    lname: "Anderson",
    grade: 12,
};
// reusability of functions
function toString(student) {
    return JSON.stringify(student);
}
console.log(toString(student));
console.log(add(5, testing));
function add(x, y) {
    let result = x + y;
    return result;
}
//Tuple JS
function sendMessage() {
    let tmp = Math.round((Math.random()));
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
for (let i = 0; i < 10; i++) {
    let [statusResult, data] = sendMessage();
    if (statusResult == "success")
        console.log(data);
}
const [statusResult, data] = sendMessage();
if (statusResult == "success")
    console.log(statusResult);
