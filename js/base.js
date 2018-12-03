
<!-- Multyple Image Slider -->

var owl = $('.owl1');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<img src='images/myprevimage.png'>","<img src='images/mynextimage.png'>"],
        responsive: {
          0: {
            items: 1
          },
		  600: {
            items: 2
          },
		  730: {
            items: 3
          },
		  960: {
            items: 4
          },
		  1200: {
            items: 5
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

<!-- Multyple Image Slider -->

/* For Div Sticky */

if(screen.width > 767) { 
        //multiple sticky div
       var stickyHeaders = (function() {
  var $window = $(window),
    $stickies;

  var load = function(stickies) {
    if (
      typeof stickies === "object" &&
      stickies instanceof jQuery &&
      stickies.length > 0
    ) {
      $stickies = stickies.each(function() {
        var $thisSticky = $(this).wrap('<div class="followWrap" />');

        $thisSticky
          .data("originalPosition", $thisSticky.offset().top)
          .data("originalHeight", $thisSticky.outerHeight())
          .parent()
          .height($thisSticky.outerHeight());
      });

      $window.off("scroll.stickies").on("scroll.stickies", function() {
        _whenScrolling();
      });
    }
  };

  var _whenScrolling = function() {
    $stickies.each(function(i) {
      var $thisSticky = $(this),
        $stickyPosition = $thisSticky.data("originalPosition");

      if ($stickyPosition <= $window.scrollTop()) {
        var $nextSticky = $stickies.eq(i + 1),
          $nextStickyPosition =
            $nextSticky.data("originalPosition") -
            $thisSticky.data("originalHeight");

        $thisSticky.addClass("fixed");

        if (
          $nextSticky.length > 0 &&
          $thisSticky.offset().top >= $nextStickyPosition
        ) {
         // $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
        }
      } else {
        var $prevSticky = $stickies.eq(i - 1);

        $thisSticky.removeClass("fixed");

        if (
          $prevSticky.length > 0 &&
          $window.scrollTop() <=
            $thisSticky.data("originalPosition") -
              $thisSticky.data("originalHeight")
        ) {
          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".followMeBar"));
});

}

//multiple sticky div

/* For Div Sticky */

/* Class add on navigation */
if(screen.width > 767) { 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".navigation_role").addClass("small_header");
    } else {
        $(".navigation_role").removeClass("small_header");
    }
});
}
/* Class add on navigation */

/* Profile Page */

$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});

/* Profile Page */

