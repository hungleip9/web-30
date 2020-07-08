var element = document.getElementById('mytext');
console.log(element);

element.innerHTML = '<h1>Xin chao cac ban</h1>';


var contentHTML = element.innerHTML;
console.log(contentHTML);

var elements = document.getElementsByClassName('content');
console.log(elements[0]);

var elements2 = document.getElementsByClassName('content');
console.log(elements2[1]);

//===============
var elements3 = document.getElementById('link_fb');
elements3.href = 'http://facebook.com';
console.log(elements3.href);

elements3.style.color = "red";
elements3.style.fontSize= "24px";

function buttonClick(element){
	element.style.color="green";
}

function changeColor(element){
	element.style.color="red";
}
function changeColorOut(element){
	element.style.color="blue";
}

function loadPage(){
	alert('Trang web da tai thanh cong');
}

function onBlurTest(element){
	var val=element.value;
	val = val.toUpperCase();
	element.value=val;
}
function onFocus(element){
	element.style.background="pink";
}

function onchangeTest(element){
	var val=element.value;
	alert(val);
}
function mysubmit(){
	alert('ban dang muon submit form');
}

var element_a = document.getElementById('link_fb');
console.log(element_a.parentNode.parentNode);

var element_body = document.getElementsByTagName('body')[0];
console.log(element_body.children[0]);





