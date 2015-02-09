

function onDeviceReady() {
	var pushNotification;
	// window.localStorage.clear();
	window.localStorage.setItem("a", 0);
	window.localStorage.setItem("b", 0);
	window.localStorage.setItem("c", 0);
	window.localStorage.setItem("d", 0);
	window.localStorage.setItem("e", 0);

	/*Inicio Telefones*/
	$("#reitoria").click(			function() { window.open('tel:8432152989', '_system'); });
	$("#comunicacao").click(		function() { window.open('tel:8432152991', '_system'); });
	$("#centralAtendimento").click(	function() { window.open('tel:8432152939', '_system'); });
	$("#coordenacoes").click(		function() { window.open('tel:8432152936', '_system'); });
	$("#direito").click(			function() { window.open('tel:8432152937', '_system'); });
	$("#psicologia").click(			function() { window.open('tel:8432152940', '_system'); });
	$("#enfermagem").click(			function() { window.open('tel:8432152979', '_system'); });
	$("#redes").click(				function() { window.open('tel:8432152934', '_system'); });
	$("#edfisica").click(			function() { window.open('tel:8432152949', '_system'); });
	$("#fisioterapia").click(		function() { window.open('tel:8432152951', '_system'); });
	$("#administracao").click(		function() { window.open('tel:8432152935', '_system'); });
	$("#nutricao").click(			function() { window.open('tel:8432152946', '_system'); });
	$("#engenharia").click(			function() { window.open('tel:8432152961', '_system'); });
	$("#biblioteca").click(			function() { window.open('tel:8432152926', '_system'); });
	$("#financeiro").click(			function() { window.open('tel:8432152919', '_system'); });
	$("#pos").click(				function() { window.open('tel:8432152973', '_system'); });
	$("#controleacademico").click(	function() { window.open('tel:8432152903', '_system'); });
	$("#informatica").click(		function() { window.open('tel:8432152929', '_system'); });
	$("#ava").click(				function() { window.open('tel:8432152974', '_system'); });
	$("#fies").click(				function() { window.open('tel:8432152998', '_system'); });
	$("#estagios").click(			function() { window.open('tel:8432152977', '_system'); });
	$("#carreira").click(			function() { window.open('tel:8432152970', '_system'); });
	$("#extensao").click(			function() { window.open('tel:8432152925', '_system'); });
	$("#prefeitura").click(			function() { window.open('tel:8432152938', '_system'); });
	$("#callcenter").click(			function() { window.open('tel:8432152917', '_system'); });
	$("#clinicas").click(			function() { window.open('tel:8432152960', '_system'); });
	$("#juridica").click(			function() { window.open('tel:8432152890', '_system'); });

	/*Fim Telefones*/


	/*Notificações*/
	// document.addEventListener("backbutton", function(e) {
	//    // alert('backbutton event received');
	// 	if( $("#page1").length > 0){
	// 		// call this to get a new token each time. don't call it to reuse existing token.
	// 		//pushNotification.unregister(successHandler, errorHandler);
	// 		e.preventDefault();
	// 		navigator.app.exitApp();
	// 	}else{
	// 		navigator.app.backHistory();
	// 	}
	// }, false);

	try {
		pushNotification = window.plugins.pushNotification;
		if (device.platform == 'android' || device.platform == 'Android') {
			pushNotification.register(successHandler, errorHandler, {"senderID":"510667245122","ecb":"onNotificationGCM"});		// required!
		} else {
			pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
		}
	}catch(err) {
		txt="There was an error on this page.\n\n";
		txt+="Error description: " + err.message + "\n\n";
		alert(txt);
	}
	/*Fim Notificações*/

	$("#all").click(function() {
		matricula 	= window.localStorage.getItem("acesso.matricula");
		cpf 		= window.localStorage.getItem("acesso.cpf");
		console.log(matricula);
		if (matricula != null && cpf != null) {
			$('#matricula').val(matricula);
			$('#cpf').val(cpf);
		};
	});

	$("#btn-acessar").click(function(event) {
		var notSave 	= $('#save').attr('data-cacheval');
		var matricula 	= $('#matricula').val();
		var cpf 		= $('#cpf').val();

		console.log(notSave);

		if (notSave == 'false') {
			window.localStorage.setItem('acesso.matricula', matricula);
			window.localStorage.setItem('acesso.cpf', cpf);
		}

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

// handle APNS notifications for iOS
function onNotificationAPN(e) {
	if (e.alert) {
		// $("#app-status-ul").append('<li>push-notification: ' + e.alert + '</li>');
		navigator.notification.alert(e.alert);
	}
	if (e.sound) {
		var snd = new Media(e.sound);
		snd.play();
	}
	if (e.badge) {
		pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
	}
}
// handle GCM notifications for Android
function onNotificationGCM(e) {
	switch( e.event )
	{
		case 'registered':
		if ( e.regid.length > 0 )
		{
			// $("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
			// Your GCM push server needs to know the regID before it can push to this device
			// here is where you might want to send it the regID for later use.
			console.log("regID = " + e.regid);
			$.ajax({
				url:'http://maxmeio.mine.nu/cnt/unirn/servidorpush/add.php?key='+e.regid,
				type:'GET',
				dataType:'json',
				error:function(jqXHR,text_status,strError){
					// alert("no connection");
				},
				timeout:60000,
				success:function(data){
					// alert("Save");
					// $("#app-status-ul").append('<li>response :' + data.success + "</li>");
				}
			});
		}
		break;
		case 'message':
			// if this flag is set, this notification happened while we were in the foreground.
			// you might want to play a sound to get the user's attention, throw up a dialog, etc.
			if (e.foreground){
				// if the notification contains a soundname, play it.
				var my_media = new Media("/android_asset/www/"+e.soundname);
				my_media.play();
			}
			break;
		case 'error':
			break;
		default:
			break;
	}
}
function tokenHandler (result) {
	alert(result);
	// $("#app-status-ul").append('<li>token: '+ result +'</li>');
	// Your iOS push server needs to know the token before it can push to this device
	// here is where you might want to send it the token for later use.
}
function successHandler (result) {
	console.log(result);
	// $("#app-status-ul").append('<li>success:'+ result +'</li>');
}
function errorHandler (error) {
	alert(error);
	// $("#app-status-ul").append('<li>error:'+ error +'</li>');
}
document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, false);
