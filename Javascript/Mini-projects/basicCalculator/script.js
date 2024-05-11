const add = () => {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.querySelector("h1").innerHTML = `Answer is ${a+b}`;
}
const sub = () => {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.querySelector("h1").innerHTML = `Answer is ${a-b}`;
}
const mul = () => {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.querySelector("h1").innerHTML = `Answer is ${a*b}`;
}
const div = () => {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.querySelector("h1").innerHTML = `Answer is ${a/b}`;
}