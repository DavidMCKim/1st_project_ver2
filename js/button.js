/* button.js */

$(document).ready(function(){
    $('#total').on('click', function(){
        $("#div1").load("Top3_응급실반경_folium(노인교통사고사망자다발지역포함)(결과).html");
    });
    $('#ch').on('click', function(){
        $(".container-fluid p-0").css("margin-left","500px");
        $("#div1").load("충남_병원_반경_사망자다발지역_최종.html");
    });
    $('#jn').on('click', function(){
        $(".container-fluid p-0").css("margin-left","500px");
        $("#div1").load("전남_병원_반경_사망자다발지역_최종.html");
    });
    $('#jj').on('click', function(){
        $(".container-fluid p-0").css("margin-left","500px");
        $("#div1").load("제주_병원_반경_사망자다발지역_최종.html");
    });
});