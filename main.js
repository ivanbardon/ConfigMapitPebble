var urlMaker = $('#urlMakerVal').value();
var eventMaker = $('#eventMakerVal').value();

var options = { urlMaker: urlMaker, eventMaker: eventMaker };

$('#enviar').click(function () {
	document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
	console.log(JSON.stringify(options));
});