(function($){
    'use strcit';
    
    $.fn.ScrollUpToTop = function(options){
        
        // Default options
        options = $.extend({
                "speedUp": 800
            }, options);
        
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
                options.speedUp
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
        
})(jQuery);