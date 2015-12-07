var urlMaker = $('#urlMakerVal').val();
var eventMaker = $('#eventMakerVal').val();

var options = { urlMaker: urlMaker, eventMaker: eventMaker };

$('#enviar').click(function () {
	document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options))
});