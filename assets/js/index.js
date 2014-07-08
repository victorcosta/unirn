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

}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
