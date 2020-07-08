for(var i=1;i<=7;i++){
	for(var y=1;y<=i;y++){
		document.write(' * ');
	}
		document.write("<br>");
}

document.write("<br><br>");

for(var i=1;i<=7;i++){
	for(var y=1;y<=7;y++){
		if(i==1||i==7||y==1||y==7){
		document.write('* ');
		}else{
			document.write('&nbsp&nbsp&nbsp')
		}
	}
		document.write("<br>");
}
document.write('<br><br>');
for(var i=1;i<=7;i++){
	for(var y=1;y<=7;y++){
		if(y>i){
		document.write(' * ');
		}
	}
		document.write("<br>");
}
for(var i=1;i<=7;i++){
	for(var y=1;y<=7;y++){
		
		document.write(' * ');
		
	}
		document.write("<br>");
}