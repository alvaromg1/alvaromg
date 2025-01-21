alert('Bienvenido a mi página web sobre la Primera Guerra Mundial')
var watchId;
var mapa = null;
var mapaMarcador = null;  

if (navigator.geolocation) {
  watchId = navigator.geolocation.watchPosition(mostrarPosicion, mostrarErrores, opciones); 
} else {
  alert("Tu navegador no soporta la geolocalización, actualiza tu navegador.");
}

function mostrarPosicion(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;
  var precision = posicion.coords.accuracy;
  var miPosicion = new google.maps.LatLng(latitud, longitud); 
  if (mapa == null) {
    var configuracion = {center: miPosicion, zoom: 16, mapTypeId: google.maps.MapTypeId.HYBRID};
    mapa = new google.maps.Map(document.getElementById("mapa"), configuracion);
    mapaMarcador = new google.maps.Marker({position: miPosicion, title:"Esta es tu posición"});
    mapaMarcador.setMap(mapa);
  } else {
    mapa.panTo(miPosicion);
    mapaMarcador.setPosition(miPosicion);
  }
}

fu