
$(document).ready(function(){
    function HexTime(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var arr = [hours, minutes, seconds].map(function(num){
            //pad the numbers and make them strings
            return num < 10 ? '0' + num: String(num);
        });
        //make it into hex
        document.getElementById('about').style.color = '#' + arr[0] + arr[1] + ar[2];
    }
    setInterval(HexTime(), 1000);
});

$(function () {
    $('.title').click(function () {
        $(this).toggleClass('active').next().children('.content').toggleClass('show');
    });
});