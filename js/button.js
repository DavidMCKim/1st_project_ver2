/* button.js */

$(function(){
    // 이동한 이미지의 index 값 저장(현재 화면에서 보여지는 이미지의 index)
    var movedIndex=0;

    // 슬라이드 패널을 움직여주는 함수
    function moveSlide(index){
        movedIndex = index;

        // 슬라이드 이동
        var moveLeft = -( index * 1000);
        $('#slidePanel').animate({'left':moveLeft},'slow')
    }
	$('.controlButton').each(function(index){
            $(this).hover(
              function(){
                $(this).attr('src','assets/img/controlButton2.png');
              },
              function(){
                $(this).attr('src','assets/img/controlButton1.png');
              }
            ); // hover 끝

            // 클릭하면 현재 인덱스 값을 moveSlide()함수에 전달
            $(this).on('click',function(){
               moveSlide(index);
            });
	}); // each 끝
});