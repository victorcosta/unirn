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
			// window.localStorage.setItem('cpf'.cpf);
			// window.localStorage.setItem('matricula',matricula);
			var ref = window.open(encodeURI('http://projetos.maxmeio.com/unirn_app/?matricula='+matricula+'&cpf='+cpf), '_self', 'location=no');
		};
	});
	checkConection();
	// getForm();
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

function getForm(){
	var cpf 		= window.localStorage.getItem('cpf');
	var matricula 	= window.localStorage.getItem('matricula');
	if (cpf && matricula) {
		$('#matricula').val(matricula);
		$('#cpf').val(cpf);
	};
}

// function checaConexao(){
// 	var networkState = navigator.connection.type;
// 	// if (networkState == 'Connection.NONE') {
// 	navigator.notification.alert(networkState,null,"Alerta",'OK!');
// 	if (networkState != 'Connection.WIFI') {
// 		navigator.notification.vibrate(100);
// 		navigator.notification.alert("Você está sem conexão com a rede",null,"Alerta",'OK!');

// 		if (navigator.app) {
//            navigator.app.exitApp();
//         }
//         else if (navigator.device) {
//             navigator.device.exitApp();
//         }
// 	};
// }