document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {
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
	var ref = checkConnection();
}

function checkConnection() {
		var networkState = navigator.connection.type;

		var states = {};
		states[Connection.UNKNOWN]  = 'Conexão desconhecida';
		states[Connection.ETHERNET] = 'Conexão Ethernet';
		states[Connection.WIFI]     = 'Você está Conectado pelo WiFi';
		states[Connection.CELL_2G]  = 'Você está Conectado pelo 2G';
		states[Connection.CELL_3G]  = 'Você está Conectado pelo 3G';
		states[Connection.CELL_4G]  = 'Você está Conectado pelo 4G';
		states[Connection.CELL]     = 'Você está Conectado por uma conexão de celular';
		states[Connection.NONE]     = 0;

		return states[networkState];

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