ScrollUpToTop
=============

A jQuery plugin to scroll up to top of webpage in one click.

Installation
------------
Include [jQuery](http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js) and jquery.scrolluptotop.min.js: 
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="dist/js/jquery.scrooluptotop.min.js"></script>
```

Include too the stylesheet jquery.scrolluptotop.min.css
```html
<link rel="stylesheet" href="dist/css/jquery.scrolluptotop.min.css">
```

[Bower](https://github.com/bower/bower) users can get the source with:
```sh
bower install scroll_up_to_top --save
```

Basic usage
-----------
After includes, use:
```html
<script>
    (function($){
        $.ScrollUpToTop({"speedUp":1500});
    })(jQuery);
</script>```

Options
-------
* speedUp : speed used to scroll up to top