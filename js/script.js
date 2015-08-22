

(function($) {
  var url = 'http://digitaslbi-id-test.herokuapp.com/bus-stops?northEast=51.52783450,-0.04076115&southWest=51.51560467,-0.10225884';

  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      console.dir(json.markers[0]);

      var myGmaps = $.extend(google.maps, {});


        var latlng = new myGmaps.LatLng(51.5286416, -0.1015987);
        var options = {
          zoom: 14,
          center: latlng,
          mapTypeId: myGmaps.MapTypeId.ROADMAP

        };

        var map = new myGmaps.Map($('#map')[0], options);


      for (i = 0; i < json.markers.length; i++) {
        var myLatLng = {lat: json.markers[i].lat, lng: json.markers[i].lng};

        //myPopup = 'popup' + i;
        popup = '<div>' + json.markers[i].name + '</div>';

        var myInfoWindow = 'infowindow' + i;

        var myInfoWindow = new google.maps.InfoWindow({
          content: popup
        });
        var myMarker =  'marker' + i;

        console.log(myInfoWindow);

        myMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        myMarker.addListener('click', function() {
          myInfoWindow.open(map, myMarker);
        });
      }


    },
    error: function(e) {
      console.log(e.message);
    }
  });

})(jQuery);
