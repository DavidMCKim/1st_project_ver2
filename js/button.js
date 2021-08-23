/* button.js */

$(document).ready(function(){
    $('#analysisPNG').mouseover(function(){
        $("#analysisPNG").hide();
        $("#analysisText").show();
    });
    $("#analysisPNG").mouseleave(function(){
       $("#analysisPNG").show();
       $("#analysisText").hide();
    });
});