// navigation bar control

// google maps API

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(32.5040338, -7.2340256),
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"274555"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#274555"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType": "administrative.province",  "elementType": "geometry.stroke","stylers": [{"visibility": "on"},{"color": "#ff7761"}]}]
      };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var myMarker = './img/marker1.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.9928605, -7.6546787),
        map: map,
        icon: myMarker
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(31.9606241, -6.5936424),
        map: map,
        icon: myMarker
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.0510291, -7.4205778),
        map: map,
        icon: myMarker
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.2307251, -7.9817398),
        map: map,
        icon: myMarker
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.3308995, -6.4082486),
        map: map,
        icon: myMarker
    });
}
