$(document).ready(function(){

	var options = {  urlMaker: $('#urlMakerVal').val(),
					 eventMaker: $('#eventMakerVal').val()
				  };

	$('#enviar').click(function () {
		document.location = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
		console.log(JSON.stringify(options));
	});
});
