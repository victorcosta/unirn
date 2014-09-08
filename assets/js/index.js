document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {
	$('#goface').click(function(event) {
		openFacebook();
	});
	$('#alert').click(function(event) {
		navigator.notification.alert("Hello");
	});
	$('#vibrate').click(function(event) {
		navigator.notification.vibrate(1000);
	});
	$('#beep').click(function(event) {
		navigator.notification.beep(3);
	});
	$('#all').click(function(event) {
		navigator.notification.beep(1);
		navigator.notification.vibrate(2000);
		navigator.notification.alert("Hello",null,"hahahahA",'i`m fine');
	});

}
function openFacebook() {
	window.open(encodeURI('http://www.unirn.edu.br/2013/'), '_self', 'location=no');
}
