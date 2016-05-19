$(document).ready(function () {
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
        function startTime(duration, display) {
                var start = date,
                min,
                diff,
                sec,
                mili;
            function timer() {
                //find time elapsed ( | truncates to int)
                diff = duration - (((Date.now() - start)/1000)|0);
                min = (diff / 60) | 0;
                sec = (diff / 60) | 0;
                mili =(diff / 60) | 0;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;
                mili = mili < 10 ? "0" + mili : mili;

                display.textContent = min + ":" + sec + ":" + mili;
            }
        }
        window.onload = function () {
            var threedays = 4320,
            display = document.querySelector('#time');
            startTimer(threedays,display);
        };
    }

    //update the color every 1,000 miliseconds
    setInterval(HexTime(), 1000);

    //reset the sliders
    $('#reset').click(function () {
        $('slider1').slider.value(33);

        $('slider2').slider.value(33);

        $('slider3').slider.value(33);
        
        return false;
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


var split = function () {
    var max = 100;
    $("#slider1").on("slide", function (slideEvt) {

    });

    function refreshSliders(slidermainin) {
        var value1 = $("#slider_1").slider("option", "value");
        var value2 = $("#slider_2").slider("option", "value");
        var value3 = $("#slider_3").slider("option", "value");
        var valuechange = (value1 + value2 + value3) - 100;
        var valuemain = 0, valueother1 = 0, valueother2 = 0;

        switch (slidermainin) {
            case 1:
                slidermain = "#slider_1";
                sliderother1 = "#slider_2";
                sliderother2 = "#slider_3";
                valuemain = value1;
                valueother1 = value2;
                valueother2 = value3;
                break;
            case 2:
                slidermain = "#slider_2";
                sliderother1 = "#slider_1";
                sliderother2 = "#slider_3";
                valuemain = value2;
                valueother1 = value1;
                valueother2 = value3;
                break;
            case 3:
                slidermain = "#slider_3";
                sliderother1 = "#slider_1";
                sliderother2 = "#slider_2";
                valuemain = value3;
                valueother1 = value1;
                valueother2 = value2;
                break;
        }

        if (valueother1 === 0 || valueother2 === 0) {
            if (valueother1 === 0) {
                if (valuechange <= 0) {
                    $(sliderother1).slider('value', valueother1 - (valuechange / 2));
                    $(sliderother2).slider('value', valueother2 - (valuechange / 2));
                } else {
                    $(sliderother2).slider('value', valueother2 - valuechange);
                }
                } else {
                if (valuechange <= 0) {
                    $(sliderother1).slider('value', valueother1 - (valuechange / 2));
                    $(sliderother2).slider('value', valueother2 - (valuechange / 2));
                } else {
                    $(sliderother1).slider('value', valueother1 - valuechange);
                }
                }
            } else {
            $(sliderother1).slider('value', valueother1 - (valuechange / 2));
            $(sliderother2).slider('value', valueother2 - (valuechange / 2));
            }
        }*/

