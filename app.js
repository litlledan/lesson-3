// 9 - 3 = 6


// 1 number

var myAge = 29

// 2 string 
var myName = "Alastor"

// 3 boolean
var isRainy = false

// 4 null
var myBrother = null

// 5 underfined
var myDog;
// 6 object  {} = []  array
var phone = {
    model:"14 PRO",
    color:"black",
    price:100 * 9, //900
    owner: myName //  Alastor
}
// ------CONDITIONS------(if, switch)
// готовые Функции (alert, promt, confirm)

var color = "green"
// операторы (=, ==, ===, !, ??, &&, ||)
// red === red -> true 
if (color === "red"){
    console.log('STOP')
}else if(color === "green"){
    //true
    console.log('Go');
} else if (color === "yellow")
// true
 console.log("WAIT ...");

 var operation = "*"
 if ( operation === "+") {
    console.log(100 + 50);
 } else if (operation === "-") {
    console.log(150 - 50);
} else if (operation === "*"){
    console.log(100*50);
}

var temp = 36
if (temp > 32){
    console.log("КУУН ЫСЫККЫ");
} else if(temp > 35 && temp < 40){
    comsole.log("КУУН ЫСЫККЫ......АБДААН ЫСЫККЫ");
}

// alert(5555)

var text = prompt("Атынды жаз")
 if(text.toLocaleLowerCase() === "nazima"){
    console.log('yes ,I am');
}
// weeks

var someText = "Monday"
switch (someText) {
    case "Monday":
    console.log('Понедельник');
    break;
    case "Sunday":
    console.log('Воскресенье');
    break;
    default:
    break;
}

if(!true){
    console.log('TRUE-----');
}else {
    console,log('FALSE------');
}

var userDB = {
    name: "Nazima",
    email:'test@gmail.com',
    password:
}

