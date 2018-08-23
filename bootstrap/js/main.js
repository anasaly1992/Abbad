



$(document).ready(function () {
    'use strict';
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000]);
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    });
    
});

window.onscroll = function () { "use strict"; myFunction()};
      
var navbar = document.getElementById("navbar"),
    sticky = navbar.offsetTop;

function myFunction() {
    "use strict";
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}



var myText = "Your Easiest Choice",
    myTextt = "Alabbad Auto";
i = 0,
o = 0;    
                window.onload = function () {
                    'use strict';
                    var typeWriter = setInterval(function () {
                        document.getElementById('slider-h2').textContent += myText[i];
                        i = i + 1 ;
                        if ( i > myText.length - 1){
                            clearInterval(typeWriter);
                        } 
                    }, 100); 
                    var typeWriterr = setInterval(function () {
                        document.getElementById('slider-h1').textContent += myTextt[o];
                        o = o + 1 ;
                        if ( o > myTextt.length - 1){
                            clearInterval(typeWriterr);
                        } 
                    }, 100); 
                };

$('.owl-theme2').owlCarousel({
    loop:true,
    responsiveClass:true,
    items:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:3,
            
        },
        
        530:{
            items:5,
           
        },
        
        710:{
            items:5,
            
        },
        
        900:{
            items:7,
           
        },
        
        1200:{
            items:8,
            
        },
        
        1400:{
            items:8,
            
        }
    }
});

$('.owl-theme1').owlCarousel({
    loop:true,
    responsiveClass:true,
    items:6,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1,
            
        },
        
        530:{
            items:1,
           
        },
        
        710:{
            items:3,
            
        },
        
        900:{
            items:4,
           
        },
        
        1200:{
            items:5,
            
        },
        
        1400:{
            items:5,
            
        }
    }
});


