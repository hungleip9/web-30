var tab = document.getElementsByClassName('tab');
		var content = document.getElementsByClassName('content');
		for(i = 0; i < tab.length; i++){
			tab[i].addEventListener('click', function  () {
				for(j = 0; j < content.length; j++){
					content[j].style.display = 'none';
				}
				this.nextElementSibling.style.display = 'block';
			})
		}