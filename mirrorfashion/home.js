// Fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = function () {
	if (document.querySelector('#q').value == '') {
		//alert('Não podia ter deixando em branco a busca!');
		document.querySelector('#form-busca').style.background = 'red';
		return false;
	}
};

document.querySelector('[type=search]').onfocus = function () {
	document.querySelector('#form-busca').style.background = '';
};


// Banner Rotativo
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner () {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
};

var time = setInterval(trocaBanner, 4000);


/*document.querySelector('.destaque img').addEventListener('mouseover', function () {
	clearInterval(time);
});*/

/*document.querySelector('.destaque img').addEventListener('mouseout', function () {
	trocaBanner();
	var time = setInterval(trocaBanner, 4000);
});*/