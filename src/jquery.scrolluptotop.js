(function($){
    'use strcit';
    
    $.ScrollUpToTop = function(options){
        
        // Default options
        options = $.extend({}, options);
        
        // Variables
        var $btnScroll = $("<button id=\"ScrollUpToTop\">^</button>").hide();
        var $body = $(document.body);
        
        // insert scroll up to top button
        $($body).append($btnScroll);
        
        // attach click event on button
        $($btnScroll).click(function(e){
            e.preventDefault();
            $($body).animate(
                {scrollTop:0},
                800
            );
        });
        
        $(window).scroll(function(){
            if( $(window).scrollTop() > 0) {
                $($btnScroll).fadeIn();
            } else {
                $($btnScroll).fadeOut();
            }
        });
        
    };
    
    $.ScrollUpToTop();
    
})(jQuery);