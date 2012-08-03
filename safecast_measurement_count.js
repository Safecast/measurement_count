//TODO check for the existence of Safecast variable and add method without killing other methods
var Safecast = {
  getMeasurementCount: function () {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", 'https://api.safecast.org/api/measurements/count', true);
    xmlhttp.setRequestHeader('Accept', 'application/json');

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //request is done and good
        var jsonResponse = JSON.parse(xmlhttp.responseText);
        var count = jsonResponse.count;

        var destination = document.getElementById('safecast_measurement_count');
        if (destination) {
          destination.innerHTML = count;
        }
      }
    };

    xmlhttp.send();

  },
}

