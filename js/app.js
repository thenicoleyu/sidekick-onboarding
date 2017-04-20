function isScrolledIntoView (elem) {
   var docViewTop = $(window).scrollTop();
   var docViewBottom = docViewTop + $(window).height();

   var elemTop = $(elem).offset().top;
   var elemBottom = elemTop + $(elem).height();

   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

$(document).ready(function () {
   setInterval(function () {
      $("#title").animate({ "opacity": 1 }, 400);
   }, 300);

   setInterval(function () {
      $("#subtitle").animate({ "opacity": 1 }, 500);
   }, 700);

   setInterval(function () {
      $("#download").animate({ "opacity": 1 }, 500);
   }, 1100);

   setInterval(function () {
      $("#main-img").animate({ "marginLeft": 0, "opacity": 1 }, 1000);
   }, 1100);

   // isScrolledIntoView( $("#start-track") ) {
   //    $("#start-track").animate({ "opacity": 1 }, 400);
   // };
});
