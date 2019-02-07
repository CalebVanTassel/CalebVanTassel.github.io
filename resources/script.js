

// Check if element is in viewport
// Source: https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {

    // Show elements in viewport
    $(".block").each(function() {
        if ($(this).isInViewport()) {
			$(this).addClass("blockVisible")
			//.css("opacity", "1");
    	}
	});
     
    // Fade in elements
    // Source: https://codepen.io/annalarson/pen/GesqK 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.block').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ) {
                //$(this).animate({'opacity':'1',
				//				 'margin-top': '15px'}, 5); 
				$(this).addClass("blockVisible");
            } 
        });  
    }); 


    $("#menu").click(function() {
        $(".hamburger:first").toggleClass("is-active");
        $("#sideBar").toggleClass("sideBarActive");
    });

});

