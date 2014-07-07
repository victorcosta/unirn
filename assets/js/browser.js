document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	ref = window.open(encodeURI('http://facebook.com'), '_self', 'location=no');
}