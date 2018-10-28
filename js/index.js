/*获取html的字体大小*/
function changeFontSize(){
  //获取屏幕的宽度
  var offWidth = document.documentElement.clientWidth /30;
  //1rem=宽度/30+'px'
  //console.log(offWidth);
  document.documentElement.style.fontSize= offWidth+'px';
 }
 changeFontSize();

 window.onresize = function(){
    var offWidth = document.documentElement.clientWidth /30;
    document.documentElement.style.fontSize= offWidth+'px';
 }
 /*轮播图*/

 $('.carousel .left').click(function(){
     
     $('.carousel').carousel('next');
 });
  $('.carousel .right').click(function(){
     $('.carousel').carousel('prev');
 });

  $('.carousel-blog').carousel({
    interval: false
});
  $('.blogBottom .left').click(function(){
     
     $('.carousel-blog').carousel('next');
 });
  $('.blogBottom .right').click(function(){
     $('.carousel-blog').carousel('prev');
 });


 