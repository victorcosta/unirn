document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#goface').click(function(event) {
		openFacebook();
	});
	$('#alert').click(function(event) {
		navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
            );
		alert('.');
	});
	$('#vibrate').click(function(event) {
		navigator.notification.vibrate(2000);
		alert('.');
	});
	$('#beep').click(function(event) {
		navigator.notification.beep(3);
		alert('.');
	});

}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
function alertDismissed() {
        // do something
    }
