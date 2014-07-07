document.addEventListener('deviceready', onDeviceReady, true);

function onDeviceReady() {	
	$('#alert').click(function(event) {
		alert('teste!');
	});
}