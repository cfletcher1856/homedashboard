clock = function(){
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    now = new Date;
    time = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    today = days[now.getDay()];
    day = now.getDate();
    month = months[now.getMonth()];
    year = now.getFullYear();

    current_time = ("0"+time).slice(-2)+":"+("0"+min).slice(-2)+":"+("0"+sec).slice(-2);
    current_date = '<span class="grey">'+today+'</span> ' + month + " " + day + ', <span class="grey">'+year+'</span>';
    content = '<div class="time">'+current_time+'</div><div class="date">'+current_date+'</div>';

    $("#clock").html(content);
}

setInterval('clock()', 1000);
