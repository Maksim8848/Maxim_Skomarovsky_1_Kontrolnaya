function nieravienstwa() {
  console.log('a,b,c')
  let A = parseFloat(ela.innerText);
  let B = parseFloat(elb.innerText);
  let C = parseFloat(elc.innerText);
  if (A < B && B < C) {
    result = " Первое выполняется";
  } else if (A < B && B > C) {
    result = " Второе выполняется";
  } else {
    result = " Никакое не выполняется";
  }
  document.getElementById('result').innerText = result;
}
const ela = document.getElementById('a')
const elb = document.getElementById('b')
const elc = document.getElementById('c')

const elverify = document.getElementById('verify')
elverify.addEventListener('click', nieravienstwa)
