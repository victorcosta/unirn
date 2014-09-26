document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);

function onDeviceReady() {
	window.localStorage.clear();
	window.localStorage.setItem("a", 0);
	window.localStorage.setItem("b", 0);
	window.localStorage.setItem("c", 0);
	window.localStorage.setItem("d", 0);
	window.localStorage.setItem("e", 0);
	$("#btn-acessar").click(function(event) {
		var matricula 	= $('#matricula').val();
		var cpf 		= $('#cpf').val();
		if (matricula == '' || cpf == '') {
			navigator.notification.vibrate(100);
			navigator.notification.alert("Digite a matrícula e o CPF",null,"Alerta",'OK!');
		}else{
			var ref = window.open(encodeURI('http://projetos.maxmeio.com/unirn_app/?matricula='+matricula+'&cpf='+cpf), '_self', 'location=no');
		};
	});
	$('.check').click(function(){
		var value 	=  $(this).attr('data-value');
		// var next 	=  $(this).attr('data-href');
		var count_a =  parseInt(window.localStorage.getItem("a"));
		var count_b =  parseInt(window.localStorage.getItem("b"));
		var count_c =  parseInt(window.localStorage.getItem("c"));
		var count_d =  parseInt(window.localStorage.getItem("d"));
		var count_e =  parseInt(window.localStorage.getItem("e"));
		switch (value){
			case 'a':
				count_a	= count_a + 1;
				window.localStorage.setItem("a", count_a);
				break;
			case 'b':
				count_b	= count_b + 1;
				window.localStorage.setItem("b", count_b);
				break;
			case 'c':
				count_c	= count_c + 1;
				window.localStorage.setItem("c", count_c);
				break;
			case 'd':
				count_d	= count_d + 1;
				window.localStorage.setItem("d", count_d);
				break;
			default:
				count_e	= count_e + 1;
				window.localStorage.setItem("e", count_e);
		}

		$('[class^=resposta]').hide();

		if ((count_a > count_b) && (count_a > count_c) && (count_a > count_d) && (count_a > count_e))
			$('.resposta-a').show();
		if ((count_b > count_a) && (count_b > count_c) && (count_b > count_d) && (count_b > count_e))
			$('.resposta-b').show();
		if ((count_c > count_a) && (count_c > count_b) && (count_c > count_d) && (count_c > count_e))
			$('.resposta-c').show();
		if ((count_d > count_a) && (count_d > count_b) && (count_d > count_c) && (count_d > count_e))
			$('.resposta-d').show();
		if ((count_e > count_a) && (count_e > count_b) && (count_e > count_c) && (count_e > count_d))
			$('.resposta-e').show();


		if ((count_a = count_b) || (count_a = count_c) || (count_a = count_d) || (count_a = count_e))
			$('.resposta-a').show();
		if ((count_b = count_c) || (count_b = count_d) || (count_b = count_e))
			$('.resposta-b').show();
		if ((count_c = count_d) || (count_c = count_e))
			$('.resposta-c').show();
		if ((count_d = count_e))
			$('.resposta-d').show();

		return true;

	});
	$(document).delegate("#fim_teste", "pageshow", function() {
	    window.localStorage.setItem("a", 0);
		window.localStorage.setItem("b", 0);
		window.localStorage.setItem("c", 0);
		window.localStorage.setItem("d", 0);
		window.localStorage.setItem("e", 0);
	});
	checkConection();
}
function onOffLine() {
	navigator.notification.vibrate(100);
	navigator.notification.alert("Você está sem conexão com internet",closeApp,"Alerta",'OK!');
}
function closeApp(){
	if (navigator.app) {
		navigator.app.exitApp();
	}else if (navigator.device) {
		navigator.device.exitApp();
	}
}
