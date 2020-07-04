var n = prompt('moi ban nhap n: ');
if(n<=0){
	console.log('sai dieu khien cua so nguyen n!');
}else{
	var s=0;
	for(var i=0;i<=n;i++){
		s=s+i*0.5;
	}
	console.log('tong day so la: ',s);
}