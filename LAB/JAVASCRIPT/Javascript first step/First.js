const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

var string = 'The revolution will not be televised.'+'<br>';
document.write(string);

var one ='Hello, ';
var two = 'how are you?'+'<br>';
var joined = one + two;
document.write(joined);

document.write('Front'+362+'<br>');

var myString  = '123';
var myNum = Number(myString);
document.write(typeof myNum+"<br>");

var myNum  = 123;
var myString = myNum.toString();
document.write(typeof myString+"<br>");

var data = 'mozilla';
document.write(data.length+'<br>');
document.write(data[0]+'<br>');
document.write(data[data.length-3]+'<br>');

var great = data.indexOf('zilla');
document.write(great+"<br>");

var index = data.indexOf('vanilla');
document.write(index);

var radData = 'My NaMe Is MuD';
document.write("<br>"+radData.toLowerCase());
document.write("<br>"+radData.toUpperCase());
