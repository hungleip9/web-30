// alert('hello web 30'); //hien thi thong bao
// var cf = confirm('Ban co nguoi yeu chua'); //hien thi thong bao true/ false
// var name = prompt('Moi ban nhap ten','Hung'); //cho phep nhap tu ban phim
// alert(name);
var myName="le quang hung";
alert(myName);
document.write(myName);

console.log('tong 2 so: ', 2+4);
console.log('hieu 2 so: ', 2-4);
console.log('tich 2 so: ', 2*4);
console.log('thuong 2 so: ', 2/4);
console.log('chia lay du: ',2%4);

var a =5;
console.log('gia tri cua a++: ',a++);
console.log('gia tri cua a: ',a);

var b= 3;
console.log('gia tri cua b--: ',b--);
console.log('gia tri cua b: ',b);

var c=5;
console.log('gia tri cua ++c: ',++c);
console.log('gia tri cua --c: ',--c);

var x=10;
var y=18;
var xy=a-- + b++ - ++b - ++a;
console.log(xy);

console.log('phep toan 10 = 18', a==b);
console.log('phep toan 10 != 18',a!=b);
bien1=true;
bien2=false;
console.log('phep toan ||: ', bien1||bien2);
console.log('phep toan &&: ', bien1&&bien2);
console.log('phep toan !: ',!bien1);
console.log('phep toan !: ',!bien2);
console.log('phep toan !: ',!(bien1 && bien2));
console.log('phep toan !: ',!(bien1 || bien2));

var ketQua = bien2 ? "ket qua dung" : "ket qua sai";
console.log(ketQua);

var age = 17;
if(age >= 18){
	console.log('ban tren 18 tuoi moi ban xem phim heo');
}else{
	alert('ban duoi 18 moi ban out ra ngoai');
}
var thu =prompt('moi ban nhap thu: ');
switch (parseInt(thu)){
	case 2:
	console.log('thu hai');
	break;
	case 3:
	console.log('thu ba');
	break;
	case 4:
	console.log('thu tu');
	break;
	case 5:
	console.log('thu nam');
	break;
	case 6:
	console.log('thu sau');
	break;
	case 7:
	console.log('thu bay');
	break;
	case 8:
	console.log('Chu nhat');
	break;
	default:
	console.log('ban da nhap sai');
}
// vong lap

for(var i=0; i<10; i++){
	console.log('chep phat lan thu', i+1);
}

var j=0;
while (j<5){
	console.log('in ra so J: ',j);
	j++;
}

var k=1;
var S2=0;
do{
S2=S2 + k;
k++;
}while(k<9);
console.log(S2);

//break; continue

for(var i=0;i<10;i++){
	if(i==5){
		console.log('i = "',i);
		showMessage();
		
	}
	//console.log('i=:',i);
}

function showMessage(){
	console.log('Day la Message');

}
showMessage();

function tinhtong(a,b,c,d){
	return a+b;
}
var tong1=tinhtong(2, 5);
var tong2=tinhtong(2, 10);
console.log(tong1,tong2);

function sosanh(a,b){
	if (a>b) {
		return "a lon hon b";
	}else {
		return "a nho hon b";
	}
}
var ketqua = sosanh(2,5);
console.log(ketqua);