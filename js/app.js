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
	    	navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})

		$('#instagram_slider_img').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: true,
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
		
	});// DOM Ready

}(jQuery)); // IIFE

