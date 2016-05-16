$(function () {
    // setup master volume
    $("#master").slider({
        value: 60,
        orientation: "horizontal",
        range: "min",
        animate: true
    });
    // setup graphic EQ
    $("#eq > span").each(function () {
        // read initial values from markup and remove that
        var value = parseInt($(this).text(), 10);
        $(this).empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical"
        });
    });
    // make another slide change
    $('#master').bind('slide', function () {
        var pct = $('#master').slider('option', 'value') / $('#master').slider('option', 'max');
        $('#eq > span').each(function (i, e) {
            var ppct = parseInt($(this).slider('option', 'max') * pct);
            $(this).slider('option', 'value', ppct);
        });
    });
});