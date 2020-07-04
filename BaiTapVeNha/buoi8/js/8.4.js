var m=prompt('moi ban nhap m: ');
var n=prompt('moi ban nhap n: ');
var k=prompt('moi ban nhap k: ');
var S=0;
if(n>m){
	console.log('khong hop le');
}else{
	for(var i=n;i<=m;i++){
		if(i%k==0){
			S=S+i;
			
		}	
	}console.log('Tong cac so chia het cho k la: ',S)
}