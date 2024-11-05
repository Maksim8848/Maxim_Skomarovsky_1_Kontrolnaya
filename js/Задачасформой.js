function nieravienstwa() {
    console.log("a,b,c")
    let A = parseFloat(ela.value);
    let B = parseFloat(elb.value);
    let C = parseFloat(elc.value);
    console.log(A, B, C)
    check=true;
    if (A < B && B < C) {
        result = " Первое выполняется";
    } else if (A < B && B > C) {
        result = " Второе выполняется";
    } else {
        result = " Никакое не выполняется";
    }
    document.getElementById("result").value = result;
}

let result;
let check;

function send() {
    let A = parseFloat(ela.value);
    let B = parseFloat(elb.value);
    let C = parseFloat(elc.value);
    if (A < B && B != C && check) {
        document.getElementById("user").submit();
    } else {
        alert("Что-то пошло не так. Проверьте значения или измените их")
    }
}

const ela = document.getElementById("a");
const elb = document.getElementById("b");
const elc = document.getElementById("c");

const elverify = document.getElementById("verify");
elverify.addEventListener('click', nieravienstwa);

const elsend = document.getElementById("send");
elsend.addEventListener('click', send)
