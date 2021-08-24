/* slide.js */

$(function(){
    // 이동한 이미지의 index 값 저장(현재 화면에서 보여지는 이미지의 index)
    var movedIndex=0;

/*----------------------------- part.데이터 소개 시작-----------------------------*/
    // 데이터 소개 이미지 슬라이드
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
/*----------------------------- part.데이터 소개 끝-----------------------------*/


/*----------------------------- part.데이터 시각화 시작-----------------------------*/
    // 데이터 시각화 이미지 슬라이드
    function moveSlide2(index){
        movedIndex = index;

        // 슬라이드 이동
        var moveLeft = -( index * 1000);
        $('#data_visual').animate({'left':moveLeft},'slow')
    }

    // 데이터 시각화 설명 텍스트 슬라이드
    function moveSlide3(index){
        movedIndex = index;

        // 슬라이드 이동
        var moveLeft = -( index * 1000);
        $('#explainText').animate({'left':moveLeft},'slow')
    }
	$('.controlButton2').each(function(index){
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
               moveSlide2(index);
               moveSlide3(index);
            });
	}); // each 끝
/*----------------------------- part.데이터 시각화 끝-----------------------------*/

/*----------------------------- part.데이터 분석 시작-----------------------------*/
    // 마우스를 이미지에 올리면 설명 등장
	$('#analysisPNG').mouseover(function(){
        $("#analysisPNG").hide();
        $("#analysisText").show();
    });
    // 마우스를 이미지에서 떼면 다시 이미지 등장
    $("#analysisPNG").mouseleave(function(){
       $("#analysisPNG").show();
       $("#analysisText").hide();
    });
/*----------------------------- part.데이터 분석 끝-----------------------------*/
});