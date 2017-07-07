(function($){
    'use strict';

    $.ScrollUpToTop = function(options){

        // Default options
        options = $.extend({
                "speedUp": 800,
                "scrollText": "^",
                "scrollClass": "scrollToTopDef",
            }, options);

        // Variables
        var $btnScroll = $("<button id=\"ScrollUpToTop\" class=\""+options.scrollClass+"\">"+options.scrollText+"</button>").hide();
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
