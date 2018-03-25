$(document).ready(function()
{
 $("#myCarousel").carousel(
 {
  interval: 2000
 });
 $("#carouselButton").click(function()
 {
  if($("#carouselButton").children("i").hasClass("fa-pause"))
  {
   $("#myCarousel").carousel('pause');
   $("#carouselButton").children("i").removeClass("fa-pause");
   $("#carouselButton").children("i").addClass("fa-play");
  }
  else if($("#carouselButton").children("i").hasClass("fa-play"))
  {
   $("#myCarousel").carousel('cycle');
   $("#carouselButton").children("i").removeClass("fa-play");
   $("#carouselButton").children("i").addClass("fa-pause");
  }
 });
});
