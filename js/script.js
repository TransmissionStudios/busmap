

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
        var data = json.markers[i];
        var myLatLng = {lat: data.lat, lng: data.lng};

        marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        infoBox(map, marker, data);
      }

      function infoBox(map, marker, data) {
        var infoWindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function(e) {
          console.log(data.id);

          var url = 'http://digitaslbi-id-test.herokuapp.com/bus-stops/' + data.id;

          infoWindow.setContent(data.id);
          infoWindow.open(map, marker);

          $.ajax({
            type: 'GET',
            url: url,
            async: false,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(data) {
              console.log(data);
              console.log(data.arrivals.routeId);
            },
            error: function(e) {
              console.log(e.message);
            }
          });
        });
      }

    },
    error: function(e) {
      console.log(e.message);
    }
  });

})(jQuery);
