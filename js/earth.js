xplanet = function(){
    now = new Date().getTime();

    $("#img_earth").attr("src", "images/xplanet-earth.png?"+now);
    $("#img_moon").attr("src", "images/xplanet-moon.png?"+now);
}

xplanet();

setInterval('xplanet()', 120000);
