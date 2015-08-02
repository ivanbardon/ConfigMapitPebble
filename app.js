// Esta es una aplicacion GPS para el Pebble


// solicitud de las coordenadas
navigator.geolocation.getCurrentPosition(function(pos){
	if(pos){
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		
		simply.fullscreen(true);
		
		simply.text({
			title:'Mapit',
			body: 'Boton superior para guardar tu posicion\r'+
				  'Boton central para mandar a alguien\r'+
				  'Boton inferior para mandar un S.O.S\r'+
				  'Boton izquierdo Menu'
		});
		simply.on('singleClick', 'up', function(e){
			var linkGoog = '<a href=#>Apple Maps</a>';
			var linkAppl = '<a href=#>Google Maps</a>';
			var miss = 'Tu posicion en coordenadas de latitud y longitud'+
				  '\nLat: '+ lat +
				  '\nLon: '+ lon +
				  '\r'+linkAppl +
				  '\r'+linkGoog;
			ajax({
				method: "POST",
		        url: "https://api.pushover.net/1/messages.json",
		        data: {
		        	token: "a9UDP7Mvt5GCrvLKhjsqn1arqQ9jMm",
			        user: "uo7oH8QGgC8CXVizfy4W3m6U2Q3zS1",
			        device: "iphone",
			        message: miss,
			        html: 1
			    	}
		    	},
		        function(data){
		        	simply.body("Posicion enviada");
		        	
		        },
		        function(data){ simply.body("Fallo al enviar") }
	        );
	    });
	};
	else{
		simply.body('Mapit necesita que el navegador web de tu telefono(Safari, Chrome) tenga los permisos de localizacion activados')
	};
});