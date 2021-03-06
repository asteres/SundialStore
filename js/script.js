$(document).ready(function () {
    //color based on time
    function HexTime() {
        var date = new Date();
        var hours = date.getHours() + Math.floor((Math.random() * 100) + 1);
        var minutes = date.getMinutes() + Math.floor((Math.random() * 100) + 1);
        var seconds = date.getSeconds() + Math.floor((Math.random() * 100) + 1);
        var arr = [hours, minutes, seconds].map(function (num) {
            //pad the numbers and make them strings
            return num < 10 ? '0' + num : String(num);
        });
        //make it into hex
        document.getElementById('about').style.color = '#' + arr[0] + arr[1] + arr[2];
    }

    //update the color every 1,000 miliseconds
    setInterval(HexTime(), 1000);

    //timer
    function startTime(duration, display) {
                var start = Date.now(),
                min,
                diff,
                sec;
            function timer() {
                //find time elapsed ( | truncates to int)
                diff = duration - (((Date.now() - start)/1000)|0);
                min = (diff / 60) | 0;
                sec = (diff % 60) | 0;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                display.textContent = min + ":" + sec;
            }
            timer();
            setInterval(timer, 1000);
        }
        window.onload = function () {
            var threedays = 4320 * 60,
                display = document.querySelector('#time');
            startTime(threedays,display);
        };

    //reset the sliders
    $('.reset').click(function () {
        $('slider1').slider('setValue', "33");

        $('slider2').slider('setValue', "33");

        $('slider3').slider('setValue', "33");
        
        return false;
    });

    $('#options').click(function() {
  $('#amount-custom')[this.checked ? "show" : "hide"]();
});
        $('#options').click(function() {
  $('#amount-custom')[this.checked ? "focus" : ""]();
});

});

//show/hide the sliders
    $('.click').click(function () {
        $('.content').slideToggle(500);
    });

//initiate sliders
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

$(".slide_selgere").noUiSlider({
    start: [ 5 ],
    step: 1,
    format: wNumb({
    decimals: 0
    }),
    range: {
    'min': [ 1 ],
    'max': [ 10 ]
    }
});

$(".slide_selgere").Link('lower').to($('#selgere'));

$(".slide_pakker").noUiSlider({
start: [ 15 ],
    step: 1,
    format: wNumb({
    decimals: 0
    }),
    range: {
    'min': [ 1 ],
    'max': [ 100 ]
    }

});

$(".slide_pakker").Link('lower').to($('#pakker'));

var sliders = $('.slider'), sum = $('#sum');

sliders.Link().to(function( value ){
    var total = Number(value) + Number(sliders.not($(this)).val());
    sum.html(total);
});

