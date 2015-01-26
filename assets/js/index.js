document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);

function onDeviceReady() {
	window.localStorage.clear();
	window.localStorage.setItem("a", 0);
	window.localStorage.setItem("b", 0);
	window.localStorage.setItem("c", 0);
	window.localStorage.setItem("d", 0);
	window.localStorage.setItem("e", 0);

	/*Inicio Telefones*/
	$("#reitoria").click(			function() { window.open('tel:32152989', '_system'); });
	$("#comunicacao").click(		function() { window.open('tel:32152991', '_system'); });
	$("#centralAtendimento").click(	function() { window.open('tel:32152939', '_system'); });
	$("#coordenacoes").click(		function() { window.open('tel:32152936', '_system'); });
	$("#direito").click(			function() { window.open('tel:32152937', '_system'); });
	$("#psicologia").click(			function() { window.open('tel:32152940', '_system'); });
	$("#enfermagem").click(			function() { window.open('tel:32152979', '_system'); });
	$("#redes").click(				function() { window.open('tel:32152934', '_system'); });
	$("#edfisica").click(			function() { window.open('tel:32152949', '_system'); });
	$("#fisioterapia").click(		function() { window.open('tel:32152951', '_system'); });
	$("#administracao").click(		function() { window.open('tel:32152935', '_system'); });
	$("#nutricao").click(			function() { window.open('tel:32152946', '_system'); });
	$("#engenharia").click(			function() { window.open('tel:32152961', '_system'); });
	$("#biblioteca").click(			function() { window.open('tel:32152926', '_system'); });
	$("#financeiro").click(			function() { window.open('tel:32152919', '_system'); });
	$("#pos").click(				function() { window.open('tel:32152973', '_system'); });
	$("#controleacademico").click(	function() { window.open('tel:32152903', '_system'); });
	$("#informatica").click(		function() { window.open('tel:32152929', '_system'); });
	$("#ava").click(				function() { window.open('tel:32152974', '_system'); });
	$("#fies").click(				function() { window.open('tel:32152998', '_system'); });
	$("#estagios").click(			function() { window.open('tel:32152977', '_system'); });
	$("#carreira").click(			function() { window.open('tel:32152970', '_system'); });
	$("#extensao").click(			function() { window.open('tel:32152925', '_system'); });
	$("#prefeitura").click(			function() { window.open('tel:32152938', '_system'); });
	$("#callcenter").click(			function() { window.open('tel:32152917', '_system'); });
	$("#clinicas").click(			function() { window.open('tel:32152960', '_system'); });
	$("#juridica").click(			function() { window.open('tel:32152890', '_system'); });

	/*Fim Telefones*/

	$("#btn-acessar").click(function(event) {
		var matricula 	= $('#matricula').val();
		var cpf 		= $('#cpf').val();
		if (matricula == '' || cpf == '') {
			navigator.notification.vibrate(100);
			navigator.notification.alert("Digite a matrícula e o CPF",null,"Alerta",'OK!');
		}else{
			var ref = window.open(encodeURI('https://swisslink2.websiteseguro.com/university/app/index.php?Email='+matricula+'&WebSenha='+cpf), '_self', 'location=no');
			// var ref = window.open(encodeURI('https://swisslink2.websiteseguro.com/university/app/index.php?Email=2012b010426&WebSenha=05419868482'), '_self', 'location=no');
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

		if ((count_a > count_b) && (count_a > count_c) && (count_a > count_d) && (count_a > count_e)){
			$('.resposta-a').show();

			$('.resposta-b').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_b > count_a) && (count_b > count_c) && (count_b > count_d) && (count_b > count_e)){
			$('.resposta-b').show();

			$('.resposta-a').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_c > count_a) && (count_c > count_b) && (count_c > count_d) && (count_c > count_e)){
			$('.resposta-c').show();

			$('.resposta-a').hide();
			$('.resposta-b').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_d > count_a) && (count_d > count_b) && (count_d > count_c) && (count_d > count_e)){
			$('.resposta-d').show();

			$('.resposta-a').hide();
			$('.resposta-b').hide();
			$('.resposta-c').hide();
			$('.resposta-e').hide();
		}
		if ((count_e > count_a) && (count_e > count_b) && (count_e > count_c) && (count_e > count_d)){
			$('.resposta-e').show();

			$('.resposta-a').hide();
			$('.resposta-b').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
		}


		if ((count_a = count_b) || (count_a = count_c) || (count_a = count_d) || (count_a = count_e)){
			$('.resposta-a').show();

			$('.resposta-b').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_b = count_c) || (count_b = count_d) || (count_b = count_e)){
			$('.resposta-b').show();

			$('.resposta-a').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_c = count_d) || (count_c = count_e)){
			$('.resposta-c').show();

			$('.resposta-a').hide();
			$('.resposta-c').hide();
			$('.resposta-d').hide();
			$('.resposta-e').hide();
		}
		if ((count_d = count_e)){
			$('.resposta-d').show();

			$('.resposta-a').hide();
			$('.resposta-b').hide();
			$('.resposta-c').hide();
			$('.resposta-e').hide();
		}

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
