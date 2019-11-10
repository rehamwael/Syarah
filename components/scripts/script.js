$( document ).ready(function() {
  $('.loader').hide();

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
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
});