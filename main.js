var urlMaker;
var eventMaker;
$(document).ready(function(){
	$('#enviar').click(function () {
		var urlMaker = $('#urlMakerVal').val();
		var eventMaker = $('#eventMakerVal').val();

		var options = { urlMaker: urlMaker, eventMaker: eventMaker };
		document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
		console.log(JSON.stringify(options));
	});
});
