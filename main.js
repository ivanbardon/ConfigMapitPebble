var urlMaker = $('#urlMakerVal').val();
var eventMaker = $('#eventMakerVal').val();

var options = { urlMaker: $('#urlMakerVal').val(), eventMaker: eventMaker };

$('#enviar').click(function () {
	document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
	console.log(JSON.stringify(options));
});
