getWeather = function(){
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: '',
    unit: 'f',
    success: function(weather) {
      console.log(weather);
      if(weather.temp > 75) {
        console.log("amimate hot")
        $('#weather').animate({backgroundColor: '#F7AC57'}, 1500);
      } else {
        console.log("amimate cold")
        $('#weather').animate({backgroundColor: '#0091c2'}, 1500);
      }

      html = '<div id="current_text">'+weather.currently+'</div>';
      html += '<div id="current_temp">'+weather.temp+'&deg;</div>';
      html += '<div id="current_icon" class="icon icon-'+weather.code+'"></div>';


      five_day_html = '<div class="weather_box"><div class="weather_widget">';

      for(d in weather.forecast)
      {
        if(d > 0 && d <=5)
        {
          five_day_html += '<div class="day'+d+'">' +
                    '<div class="text">'+
                      '<div class="day">'+weather.forecast[d].day+'</div>'+
                      '<div class="icon icon-'+weather.forecast[d].code+'"></div>'+
                      '<div class="temperatures">'+weather.forecast[d].high+'&deg;</div>'+
                      '<div class="description">'+weather.forecast[d].text+'</div>'+
                    '</div>'+
                  '</div>';
        }
      }
      five_day_html += '</div><div class="overlay"></div></div>';

      var timestamp = moment(weather.updated);
      html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';

      $("#fivedayweather").html(five_day_html);
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

getWeather();
setInterval('getWeather()', 600000);
