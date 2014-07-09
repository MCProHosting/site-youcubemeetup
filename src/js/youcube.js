(function () {
    var $content = $('main'),
        $header = $('header');

    function computeResize() {
        var view_height = $(window).height();

        $header.css('margin-bottom', Math.max((view_height - $content.height()) / 2 - $header.height(), 30));
    }

    $(function () {
        computeResize();
        $(window).resize(computeResize);
    });

    $('.profile-slider').each(function () {
        var $this     = $(this),
            $offseter = $('<div class="profile-slider-offset" />');

        $this.wrapInner($offseter);

        setInterval(function () {
            var $offseter = $('.profile-slider-offset', $this);

            $offseter.addClass('animated');
            $offseter.css('transform', 'translateX(-150px)');

            setTimeout(function () {
                $offseter.removeClass('animated');
                $offseter.css('transform', 'translateX(0)');
                $offseter.find('> *:first-child').remove().appendTo($offseter);
            }, 500);
        }, 2000);
    });


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-48751750-6', 'auto');
    ga('send', 'pageview');
})();