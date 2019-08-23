// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {

		$('#owl_service_slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    dots: false,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			smartSpeed:2000,
	    	navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		})

		$('#instagram_slider_img').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: true,
		    autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			smartSpeed:2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		})


		$('#product_slider_content').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			smartSpeed:2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		})

		// counter
		$('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 4000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
		
	});// DOM Ready

}(jQuery)); // IIFE

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}