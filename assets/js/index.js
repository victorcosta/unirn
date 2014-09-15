document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {
	// $('#alert').click(function(event) {
	// 	navigator.notification.alert("Hello");
	// });
	// $('#vibrate').click(function(event) {
	// 	navigator.notification.vibrate(1000);
	// });
	// $('#beep').click(function(event) {
	// 	navigator.notification.beep(3);
	// });
	// $('#all').click(function(event) {
	// 	navigator.notification.beep(1);
	// 	navigator.notification.vibrate(2000);
	// 	navigator.notification.alert("Hello",null,"hahahahA",'i`m fine');
	// });

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

}