//드랍메뉴
$(function(){
  $('.inner-menu').hide();
  $('.dept1 >a').mouseover(function(){
    $('.inner-menu').slideDown();
    $('.menu-bg').css('display','block')
  })
  $('.menu-bg').mouseleave(function(){
    $('.inner-menu').hide();
    $('.menu-bg').css('display','none');
  });
  
//버튼메뉴
$(document).mouseup(function(e){
  if($('.menu-btn, .menu-open').has(e.target).length === 0){
    $('.menu-btn').toggleClass('active')
  }

  $('#menu-img .menu-btn').click(function(){
    $('.menu-open').toggleClass('active');
  })
$('.dept2-2').click(function(){
  $('.menu-open').removeClass('active');
})

$('.dept1-1> a').click(function(){
  $('.dept1-1> a').css('color','#074c43')
  $(this).css('color','orange')
  $('.dept1-1 ul').css('display','none')
  $(this).next().css('display','block')


 })


  //two section
  $('button').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('on');
    $this.siblings('button.on').removeClass('on');
    
    var $outer = $this.closest('.outer');
    var $current = $outer.find(' > .tabs > .tab.on');
    var $post = $outer.find(' > .tabs > .tab').eq(index);
    
    $current.removeClass('on');
    $post.addClass('on');
    // 위의 코드는 탭메뉴 코드입니다.
    
    $('.slider').slick('setPosition');

});
});



 $('.slider').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,   //한 화면에 보여줄 아이템수
        slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,  //미만
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
             
              {
                breakpoint: 768,     // 480 미만
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });    
	
/*four section*/

// $('.content').slick({
//   dots:false,
//   autoplay:true,
//   infinite:true,
//   autoplaySpeed:2500,
//   slidesToShow:1,
//   slidesToScroll:1,
//   arrows:true,
//   prevArrow:$('.prev'),
//   nextArrow:$('.next'),  
//   responsive: [
//     {
//         breakpoint: 1024,  //미만
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//   ]
  
// })


 })
