var myInt = 5;
var myFloat = 6.667;
document.write("Value of myInt = " + myInt+ "<br>");
document.write("Value of myFloat = " + myFloat+"<br>");
document.write("Type of myInt = "+ typeof myInt+"<br>");
document.write("Type of myFloat = "+typeof myFloat+"<br>");

var num1 = 10;
var num2 = 50;
document.write("Value of num1 is = " + num1 +"<br>");
document.write("Value of num2 is = " + num2 +"<br>");
document.write("9 * num1 is = "+(9 * num1) +"<br>");
document.write("num1 ** 3 is = " + (num1 ** 3) +"<br>");
document.write("Value of num1/num2 is = " + (num2 / num1) +"<br>");

var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

