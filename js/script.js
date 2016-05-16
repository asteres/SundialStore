
$(document).ready(function(){

    /**
     * @return {number}
     */
    function HexTime(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return date;
        var arr = [hours, minutes, seconds].map(function(num){
            //pad the numbers and make them strings
            return num < 10 ? '0' + num: String(num);
        })
        //make it into hex
        var color = '#' + arr[0] + arr[1] + ar[2];

        document.getElementById('about').style.color = color;
    }
});

setInterval(HexTime(), 1000);