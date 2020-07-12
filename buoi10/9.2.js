function AutoCheck() {
	var check = document.getElementsByClassName("check");	
	console.log(check);
	for(var i = 0; i < check.length ; i++ ){
		check[i].checked = true;
	}
}
function UnAutoCheck(){
	var check = document.getElementsByClassName("check");	
	console.log(check);
	for(var i = 0; i < check.length ; i++ ){
		check[i].checked = false;
	}
}
