
var element = document.getElementById('mytext');
console.log(element);	

element.innerHTML = '<h1>Xin chao lop FE 30</h1>';



var contentHTML = element.innerHTML;
console.log(contentHTML);

var elements = document.getElementsByClassName('content');
console.log(elements[0]);

var elements2 = document.getElementsByTagName('h5');
console.log(elements2[1]);

//=================================

var elements3 = document.getElementById('link_fb');
elements3.href = 'https://facebook.com';
console.log(elements3.href)

elements3.style.color ="red";
elements3.style.fontSize = "24px";

function buttonClick(element){
	element.style.color="green";
}
// var button = document.getElementById('button');
// console.log(button);
// button.addEventListener('click', buttonClick);
// button.addEventListener('click', function(){
// this.style.color="pink";
// });
function changeColor(element) {
	element.style.color="red";
}

function changeColorOut(element) {
	element.style.color="green";
}

function loadPage() {
	alert('Trang web da duoc tai');
}
	
	function onBlurTest(element){
	var val=element.value;
		val = val.toUpperCase();
		element.value=val;
}
function onFocus(element){
	element.style.background="red";
}

function onchangeTest(element){
	var val=element.value;
	alert(val);
}
function mysubmit(){
alert('ban dang submit form');
}

var element_a = document.getElementById('link_fb');
console.log(element_a.parentNode.parentNode);

var element_body = document.getElementsByTagName('body')[0];
console.log(element_body.children[0]);
