
$(document).ready(function(){
    function HexTime(){
        var date = new Date();
        var hours = date.getHours() + Math.floor((Math.random() * 100) + 1);
        var minutes = date.getMinutes() + Math.floor((Math.random() * 100) + 1);
        var seconds = date.getSeconds() + Math.floor((Math.random() * 100) + 1);
        var arr = [hours, minutes, seconds].map(function(num){
            //pad the numbers and make them strings
            return num < 10 ? '0' + num: String(num);
        });
        //make it into hex
        document.getElementById('about').style.color = '#' + arr[0] + arr[1] + arr[2];
    }
    setInterval(HexTime(), 1000);
});

$(function () {
    $('.title').click(function () {
        $(this).toggleClass('active').next().children('.content').toggleClass('show');
    });
});
$("#slider1").slider({
    ticks: [0, 25, 50, 75, 100],
    ticks_labels: ['0%', '25%', '50%', '75%', '100%'],
    ticks_snap_bounds: 2
});
$("#slider2").slider({
    ticks: [0, 25, 50, 75, 100],
    ticks_labels: ['0%', '25%', '50%', '75%', '100%'],
    ticks_snap_bounds: 2
});
$("#slider3").slider({
    ticks: [0, 25, 50, 75, 100],
    ticks_labels: ['0%', '25%', '50%', '75%', '100%'],
    ticks_snap_bounds: 2
});

var split = function () {
    var max = 100;

};
