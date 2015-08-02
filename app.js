// Esta es una aplicacion GPS para el Pebble


// solicitud de las coordenadas
navigator.geolocation.getCurrentPosition(function(pos){
	if(pos){
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		
		simply.fullscreen(true);
		simply.style('large');

		
		simply.text({
			title:'Mapit',
			body: 'Boton superior para guardar tu posicion\n'+
				  'Boton central para mandar a alguien\n'+
				  'Boton inferior para mandar un S.O.S\n'+
				  'Boton izquierdo Menu'
		});
		simply.on('singleClick', 'up', function(e){
			var miss = 	'<a href="//maps.apple.com/?ll='+lat+','+lon+'">Apple Maps</a>'+
						'\n<a href="//www.google.com/maps/preview/@'+lat+','+lon+',8z';
			ajax({
				method: "POST",
		        url: "https://api.pushover.net/1/messages.json",
		        data: {
		        	token: "a9UDP7Mvt5GCrvLKhjsqn1arqQ9jMm",
			        user: "uo7oH8QGgC8CXVizfy4W3m6U2Q3zS1",
			        device: "iphone",
			        message: miss
			    	}
		    	},
		        function(data){
		        	simply.body("Posicion enviada");
		        	
		        },
		        function(data){ simply.body("Fallo al enviar") }
	        );
	    });
	}
	else{
		simply.body('Mapit necesita que el navegador web de tu telefono(Safari, Chrome) tenga los permisos de localizacion activados')
	};
});