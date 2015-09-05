var UI = require('ui');
var Light = require('ui/light');
var ajax = require('ajax');

var lat;
var lon;
var urlMaker = 'https://maker.ifttt.com/trigger/mapit/with/key/';
var keyMaker = 'd9ueOfO0iQ8SHOS5ziKAMQ';
Light.on('long');

var tarjetaLoader = new UI.Card({
	title: 'Enviando',
	subtitle: ''
});

var sendIfNotification = function(){
	var ll = lat+','+lon;
  ajax(
    {
      url: urlMaker+keyMaker,
      method: 'POST',
      data:{
        "value1":'GoogleMaps '+'http://maps.google.com/maps?q=loc:'+ll,
        "value2":'AppleMaps '+'http://maps.apple.com/?q='+ll
      }
    },
    function(data){
      console.log(data);
      console.log('enviado');
			tarjetaLoader.hide();
    },
    function(err){
      console.log(err);
      console.log('fallo al enviar');
    }
  );
};

var tarjetaGPS = new UI.Card({
	scrollable: true,
	title: 'Info del GPS',
	subtitle: '',
	body: ''
});
tarjetaGPS.show();
tarjetaGPS.on('click', 'select', function(e){
	var menu = new UI.Menu({
		sections: [{
			title:'Mapit',
			items: [
				{
					title: 'Enviar S.O.S',
					subtitle: 'Contacto/s'
				},
				{
					title: 'Casa',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Vehiculo',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Ocio',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Trabajo',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Ciudad',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Montaña',
					icon: 'images/menu_icon.png',
					subtitle: 'Añadir icono'
				},
				{
					title: 'Mapit',
					icon: 'images/menu_icon.png',
					subtitle: 'Un simple Mapit'
				}]
		}]
	});
	menu.show();
	menu.on('select', function(e){
      if (e.itemIndex===0){
        sendIfNotification();
				tarjetaLoader.show();
				tarjetaLoader.subtitle('S.O.S');
      }
      else if(e.itemIndex >= 1){
        tarjetaLoader.show();
				tarjetaLoader.subtitle('Otro');
      }
    });
});

var locOpts = {
	enableHighAccuracy: true,
	maximumAge: 30000
};
function locBien(pos){
	var pre = pos.coords.accuracy;
	var vel = pos.coords.speed;
	var alt = Math.round(pos.coords.altitude);
	var dir = pos.coords.heading;
	lat = pos.coords.latitude;
	lon = pos.coords.longitude;
	
	tarjetaGPS.subtitle('Precisión: '+ pre + 'mts'+
	'\nVelocidad: '+ vel + 'mts/s');
	tarjetaGPS.body('Altitud: '+ alt + 'mts'+
	'\nDirección: '+ dir +
	'\nLat: '+ lat +
	'\nLong: '+ lon);
}
function locMal(err){
	console.log(err.code + 'Error: '+err.missage);
}
navigator.geolocation.watchPosition(locBien, locMal, locOpts);
// Crear la página de configuración
Pebble.addEventListener('showConfiguration', function(e) {
  // Cargar la página de configuración
  Pebble.openURL('http://ivanbardon.github.io/portfolio');
});