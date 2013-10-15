$(document).ready(function() {

	$(".datepicker").each(function(){
		$(this).datepicker({
			dateFormat: "dd.mm.yy",
			minDate: new Date(2013, 10 - 1, 14),
			maxDate: new Date(2013, 12 - 1, 8), 
			onSelect: function(value) {
            	$(".js-date").val(value);
        	}
		});
	});
	
	$(".js-datepicker").click(function(){
		$(".datepicker").toggleClass('is-open');
	});

	$(".hint span").click(function(){
		$(".hint__bill").toggleClass('is-active');
	});

	$(".faq__content").hide();
	$(".faq__title").each(function(){
		$(this).click(function(){
			$(this).toggleClass('is-active');
			$(this).parent().find(".faq__content").slideToggle();
		});
	});
	cy = $('.cycle-slideshow');

	$('.slider').on('cycle-after', function(e) {
		
	    var index = cy.data("cycle.opts").currSlide;
	    $('.days__item').removeClass('is-active is-active1 is-active2 is-active3');
	     var div = Math.floor(index/3);
		 var rem = index % 3 + 1;
		 div = div + 1;
	    $(".days").find("[data-slide='" + div + "']").addClass('is-active is-active'+rem);
	   // alert(index);
	    //transitionNext(index);
	});
	$('.days__item').click(function (e) {
		ind = $(this).data('slide');
		ind = ind*3 - 3;
		cy.cycle('goto', ind);
		return false;
	});

});