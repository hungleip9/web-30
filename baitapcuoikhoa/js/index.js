$(document).ready(function($) {
	$('.btn12').on('click', function(){
		var name = $('#Name').val();
		var phone = $('#Phone').val();
		var email = $('#Email').val();
		var diachi = $('#diaChi').val();
		function validateEmail(Email) {
		    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(Email).toLowerCase());
		}
		function phonenumber(Phone)
		{
			var re2 = /((09)|(03)|(06)|(08)|(02)+([0-9]{8})\b)/g;
			return re2.test(Phone);
		}
		if ( name == "") {
			$('#erroname').html('ban chua nhap day du ten');
			return;
		}
		else if($('#Name').val().length <= 8){
			$('#erroname').html('yeu cau nhap ho ten >8 ky tu');
			return;
		}
		else{
			$('#erroname').html();
		}
		if ( phone == "") {
			$('#errophone').html('ban chua nhap day du phone');
			return;
		}
		else if (!phonenumber(Phone.value)) {
				Phone.nextElementSibling.innerHTML = "yeu cau nhap dung phonenumber";
				return;
			}
		else{
			$('#errophone').html();
		}
		if ( email == "") {
			$('#erroemail').html('ban chua nhap day du email');
		}
		else if (!validateEmail(Email.value)) {
				Email.nextElementSibling.innerHTML = "Yeu cau nhap dung dinh dang cua email";
				return;
		}
		else{
			$('#erroemail').html();
		}
		if ( diachi == "") {
			$('#errodiachi').html('ban chua nhap day du dia chi');
		}else{
			$('#errodiachi').html();
		}

		if( name && phone && email && diachi){
			$('.info-form').html("Tên bạn là : "+name+"</br>Số điện thoại của bạn là : "+phone+"<br>email của bạn là : "+email+"<br>địa chỉ của bạn là : "+diachi);
			
			
			
		}

		

	});
});