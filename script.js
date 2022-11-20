
// Special buttons
function information(){
    alert('you have asked for information');
    const form = document.getElementById("information");
    const a = document.createElement('a');
    const link = document.createTextNode("This is link");
    a.appendChild(link);
    a.href = "./help.html";
    document.body.appendChild(a);
}

function dark{
    alert('Change to dark mood');
}



// Operation buttons
function power_of(x, y){
    alert('x**y');
    return x**y
}
function divide(x, y){
    alert('/');
    return x/y
}
function multipicate(x, y){
    alert('*');
    return x*y
}
function minus(x, y){
    alert('-');
    return x-y
}
function plus(x, y){
    alert('+');
    return x+y
}
function plusMinus(x, y){
    alert('+-');
    return x+-y
}
function equals(x, y){
    alert('= / Calculation in progress');
    have to think about the way I will do the result
}