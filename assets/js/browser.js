document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}