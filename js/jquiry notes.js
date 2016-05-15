$(document).ready(function(){
    //all paragraphs, selectors are like css
 $('p').css('border','4px solid red');
    //animation
    //hides the first .box over 500ms
    $('.box:first').hide(500);
        //hide show
    $('.box:first').hide(500).delay(300).show(800);
    //slideup
    $('.box:first').slideUp(500).show(500);
});