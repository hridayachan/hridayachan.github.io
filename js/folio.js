// get window size
var homeH = $( window ).height(),
// number of menus
nom = 5,
// quick array setup for pages
pH = [];
pH.push("0");

// create array with panel heights
for (var s=1; s<nom; s++) { 
  var po = $("#panels a:nth-child("+s+")").position();
  pH.push( Math.round(po.top) );
};

// link the footer MORE
$("#footer .slot-title").click(function() {
  $("#footer").addClass("up").removeClass("middle");
});

// scroll direction marker
var lastScrollTop = 0,
// find heights and positions
menuH = $("#menu").outerHeight(),
panelsP = $("#panels").position(),
scrollT = panelsP.top - menuH;

$( window ).scroll(function(event) {
  
  var st = $(this).scrollTop();
  
   if (st > lastScrollTop) {
     
     // downscroll code
     //$("#footer").addClass("down").removeClass("middle");
     $("#footer").addClass("middle").removeClass("down");
     
      if ( $( window ).scrollTop() < scrollT ) {
        // 
        $("#menu .container-slot").removeClass("sel");
        $("#menu").css("top", -menuH);
        
        
      } else {
        // 
        $("#menu").css("top", "0");
        $("#menu2").css("top", -menuH);
        
      };
     
   } else {
     
     // upscroll code
     if ( $( window ).scrollTop() < scrollT ) {
        $("#footer").addClass("down").removeClass("middle");
        $("#menu").css("top", -menuH);
        $("#menu2").css("top", "0");
       
     } else {
       $("#footer").addClass("middle").removeClass("down");
     }
   }
  
  lastScrollTop = st;

    // toggle top menu selection
    for (var i=1;i<nom;i++) {
      if ( $( window ).scrollTop() > pH[i]-menuH ) { 
        $("#menu .container-slot").removeClass("sel");
        $("#menu .container-slot:nth-child("+(i+1)+")").addClass("sel");
       }
    };
});


// animating anchor link scrolling
// snippet from css-tricks 
// css-tricks.com/snippets/jquery/smooth-scrolling

$("a[href*=#]:not([href=#])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });