
$( document ).ready(function() {
  window.onscroll = function () {
    if (window.scrollY >= 30) {
        $(".navbar").addClass("fixed-header");
    }
    else {
      $(".navbar").removeClass("fixed-header");

    }
};
$('.navbar-toggler').on("click",function(){
  $('.navbar-collapse').toggleClass("collapse");
  });
  
});