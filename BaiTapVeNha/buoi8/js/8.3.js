var tong = 0;
var giaithua = 1;
var n = prompt("Moi ban nhap so n : ", "");
for(i = 1; i <=n ; i++){
	giaithua = giaithua * i;
	tong = tong + (i / giaithua);
}
document.write("Tong S = " + tong );