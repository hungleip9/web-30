$(document).ready(function($){
	var text= $('#myText');
	console.log(text.parent()); //lay cha truc tiep
	console.log(text.parents()); //Lấy ra tất cả thành phần cha
	console.log(text.parents('.container')); //Lấy ra thành phần cha được chọn
	console.log(text.parentsUntil('body')) //Lấy ra tất cả thành phần cha trong khoảng cho phép

	var myDiv = $('.container');
	console.log(myDiv.find('.myText'));
	console.log(myDiv.children(''));//con truc tiep

	console.log(text.next);//text 2
	console.log($('#myText2').prev());//text 1
	console.log($('#myText2').siblings());//tat ca anh em cung cap
	console.log($('#myText2').siblings('a')); // loc theo the a trong cung cap


	=================
	// console.log($('p').first());
	// console.log($('p').last());
	// console.log($('p').eq(2));

	// console.log($('#myText2').siblings().first());
	// console.log($('#myText2').siblings().filter('p'));
	// console.log($('#myText2').siblings().not('p'));

	// // $('.myDiv').hide();
	// $('.myDiv2').hide();

	// $('#btn').on('click', function(){
	// 	$('.myDiv').toggle(3000, function(){
	// 		$('.myDiv2').toggle(3000, function(){
	// 			alert('Xong roi!');
	// 		});
	// 	});
	// });

	// $('.myDiv2').fadeIn(3000);// hien thi ra bang cap dam dan trong 3s
	// $('.myDiv').fadeOut(3000);//an di bang cach mo dan trong 3s
	// $('.myDiv').fadeTo(2000,0.6);//thay doi do mo toi 0.6 trong 3s

	// $('.myDiv2').slideDown(1000);//hien thi bang cach tang height
	// $('.myDiv').slideUp(1000)// an di bang cach giam height
});