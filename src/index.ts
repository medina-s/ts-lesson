
//count is type of number
let count = 5
count = 10
// count = "Medina"

//const's type is a literal
const fname = "Medina"

let testing;

testing = "Medina"
testing = 5

type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Medina",
    lname: "Anderson",
    grade:12,
}

function toString(student: Student): string {
    return JSON.stringify(student)
}


console.log(toString(student));
console.log(add(5,testing));

function add(x: number, y: number): number {
    let result = x + y
    return result
}

//Any & Void


//Union
type Status = "success" | "failure"
type ServerResponse = Student | string

//Tuple JS
function sendMessage():[status:Status, response: ServerResponse]
{
    let tmp = Math.round((Math.random()))
    console.log(tmp)

    if (tmp =1) {
    return ["success", {
        fname: "Medina",
        lname: "Anderson",
        grade: 12
    }]
} else {
    return["failure", "something failed"]
}
}

for(let i=0; i<10; i++){
    let [statusResult , data] = sendMessage()
    if(statusResult == "success")
    console.log(data)
}

const [statusResult , data] = sendMessage()
if (statusResult == "success")
console.log(statusResult)