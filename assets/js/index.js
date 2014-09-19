document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);

function onDeviceReady() {
	$("#btn-acessar").click(function(event) {
		var matricula 	= $('#matricula').val();
		var cpf 		= $('#cpf').val();
		if (matricula == '' || cpf == '') {
			navigator.notification.vibrate(100);
			navigator.notification.alert("Digite a matrícula e o CPF",null,"Alerta",'OK!');
		}else{
			window.localStorage.clear();
			window.localStorage.matricula 	= matricula;
			window.localStorage.cpf 		= cpf;

			var ref = window.open(encodeURI('http://projetos.maxmeio.com/unirn_app/?matricula='+matricula+'&cpf='+cpf), '_self', 'location=no');
		};
	});
	checkConection();
	getDataForm();
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
function getDataForm(){
	if (window.localStorage.matricula) {
		$('#matricula').val(window.localStorage.matricula);
	};
	if (window.localStorage.cpf) {
		$('#matricula').val(window.localStorage.cpf);
	};
}
