document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#goface').click(function(event) {
		openFacebook();
	});
	$('#alert').click(function(event) {
		showAlert();
		//alert('teste!');
	});
	$('#vibrate').click(function(event) {
		vibrate();
	});
	$('#beep').click(function(event) {
		playBeep();
	});

}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
function showAlert() {
	navigator.notification.alert(
            'You are the winner!',  // message
            'Game Over',            // title
            'Done'                  // buttonName
            );
}
function vibrate() {
	navigator.notification.vibrate(2000);
}
function playBeep() {
	navigator.notification.beep(3);
}
