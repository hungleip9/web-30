var button_dky = document.getElementsByTagName('button')[0];
		var button_xoa = document.getElementsByTagName('button')[1];
		var span = document.getElementsByTagName('span');
		function validateEmail(email) {
		    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(email).toLowerCase());
		}
		function phonenumber(phone)
		{
			var re2 = /((09)|(03)|(06)|(08)|(02)+([0-9]{8})\b)/g;
			return re2.test(phone);
		}
		button_dky.addEventListener('click', function  (event) {
			event.preventDefault();
			var name = document.frm.name;	
			if (name.value == "") {
				name.nextElementSibling.innerHTML = "Yêu cầu nhập đầy đủ họ tên";
				return;
			}else if (name.value.length <= 8) {
				name.nextElementSibling.innerHTML = "yêu cầu nhập họ tên > 8 ký tự";
				return;
			}else{
				name.nextElementSibling.innerHTML = "";
			}

			var email = document.frm.email;
			if (email.value == "") {
				email.nextElementSibling.innerHTML = "Yêu cầu nhập đầy đủ email";
				return;
			}else if (!validateEmail(email.value)) {
				email.nextElementSibling.innerHTML = "Yêu cầu nhập đúng định dạng của email";
				return;
			}else{
				email.nextElementSibling.innerHTML = "";
			}

			var phone = document.frm.phone;
			if (phone.value == "") {
				phone.nextElementSibling.innerHTML = "Yêu cầu nhập đầy đủ phonenumber";
				return;
			}else if (!phonenumber(phone.value)) {
				phone.nextElementSibling.innerHTML = "Yêu cầu nhập đúng phonenumber";
				return;
			}else{
				phone.nextElementSibling.innerHTML = "";
			}

			var pass = document.frm.pass;
			if (pass.value == "") {
				pass.nextElementSibling.innerHTML = "Yêu cầu nhập password";
				return;
			}else{
				pass.nextElementSibling.innerHTML = "";
			}
			var confirm = document.frm.confirm;
			if (confirm.value == "") {
				confirm.nextElementSibling.innerHTML = "Yêu cầu xác nhận password";
				return;
			}else if (confirm.value != pass.value) {
				confirm.nextElementSibling.innerHTML = "Bạn phải nhập đúng password để xác nhận";
				return;
			}else{
				confirm.nextElementSibling.innerHTML = "";
			}
			alert('đăng ký thành công');

		})
		button_xoa.addEventListener('click', function  (event) {
			event.preventDefault();
			var name = document.frm.name;
			var email = document.frm.email;
			var phone = document.frm.phone;
			var pass = document.frm.pass;
			var confirm = document.frm.confirm;
			name.value = "";
			email.value = "";
			phone.value = "";
			pass.value = "";
			confirm.value = "";
		})