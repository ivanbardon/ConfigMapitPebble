var url;
var evento;
$(document).ready(function(){

	url = $('#urlMakerVal').val();
	evento = $('#eventMakerVal').val();

	$('#enviar').click(function () {
		
		var options = { urlMaker: url, eventMaker: evento };
		document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
	});
});
