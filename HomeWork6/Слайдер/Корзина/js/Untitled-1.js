/*
function factorial(n) {
    if ((n === 0) || (n === 1))
    return 1;
    else 
    return (n * factorial(n - 1));
}
console.log(factorial(5))


function clunk(times) {
    var num = times;
    while (num > 0) {
    display("clunk");
    num = num - 1;
    }
    }


function thingamajig(size) {
    var facky = 3;
    clunkCounter = 0;
    if (size == 0) {
    display("clank");
    } else if (size == 1) {
    display("thunk");
    } else {
    while (size > 1) {
    facky = facky * size;
    size = size - 1;
    }
    clunk(facky);
    }
    }
    function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
    }
    var clunkCounter = 0;
    thingamajig(2);
    console.log(clunkCounter);


    



var balanc = 10500;
var cameraOn = true;
function steal(balance, amount) {
 
cameraOn = false;
if (amount < balance) {
balance = balance - amount;
}
return amount;
cameraOn = true;
}
var amount = steal(50000, 1250);
console.log(amount);
alert("Criminal: you stole " + amount + "!");

*/


let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
let solution = scores[2];
console.log(solution);
scores[3] = 98;
