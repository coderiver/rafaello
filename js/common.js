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

});