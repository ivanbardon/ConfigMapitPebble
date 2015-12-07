$(document).ready(function(){

	var url = $('#urlMakerVal').val();
	var evento = $('#eventMakerVal').val();

	$('#enviar').click(function () {
		
		var options = { urlMaker: url, eventMaker: evento };
		document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
		console.log(JSON.stringify(options));
	});
});
