document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#alert').click(function(event) {
		alert('teste!');
	});
}
function openFacebook() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}
