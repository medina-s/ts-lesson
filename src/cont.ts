type Year = string | number

enum Color {
    "Red", //0
    "Blue",  //1
    "Yellow" //2
}

console.log(Color.Red)

type Car = {
    year: Year
    color: Color
}

type addInput = number| string
function addTwoThings(x: any, y: any): string | number
{
    return x + y

}
let z = addTwoThings("2", "5")
// Guard .. Type Guards
if (typeof z == "string"){
    z.toUpperCase()
}

// [1,2,3, "hello"]

let myObj: any[] | object
myObj = [1,2,3]
if(myObj instanceof Array) {
    myObj.map(()=> {})
    console.log(myObj)

} else {
    let keys = Object.values(myObj)
    console.log(keys)
}



// type



// interface