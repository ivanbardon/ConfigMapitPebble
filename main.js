var urlMaker = document.getElementById('urlMakerVal').value;
var eventMaker = document.getElementById('eventMakerVal').value;

var options = { urlMaker: urlMaker, eventMaker: eventMaker };

document.getElementById('enviar').on('click', function () {
	document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options))
});