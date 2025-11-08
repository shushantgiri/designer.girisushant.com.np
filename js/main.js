AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {
    "use strict";

    // Stellar Parallax
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    // Full Height Sections
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // Loader
    var loader = function() {
        setTimeout(function() { 
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    // Burger Menu Toggle
    var burgerMenu = function() {
        $('body').on('click', '.js-fh5co-nav-toggle', function(event){
            event.preventDefault();
            $(this).toggleClass('active');
            $('#ftco-nav').slideToggle();
        });
    };
    burgerMenu();

    // One Page Navigation with menu auto-collapse on link click
    var onePageClick = function() {
        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
            event.preventDefault();
            var href = $.attr(this, 'href');

            // Scroll to section
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70
            }, 500);

            // Close mobile menu after clicking a link
            var navToggle = $('.js-fh5co-nav-toggle');
            if ($('#ftco-nav').is(':visible') && navToggle.hasClass('active')) {
                navToggle.removeClass('active');
                $('#ftco-nav').slideUp();
            }
        });
    };
    onePageClick();

    // Owl Carousel
    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
            responsive: {
                0:{ items:1 },
                600:{ items:1 },
                1000:{ items:1 }
            }
        });
    };
    carousel();

    // Dropdown hover
    $('nav .dropdown').hover(function(){
        var $this = $(this);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        $this.find('.dropdown-menu').addClass('show');
    }, function(){
        var $this = $(this);
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        $this.find('.dropdown-menu').removeClass('show');
    });

    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // ✅ Always Visible Fixed Navbar (no hide on scroll)
    var scrollWindow = function() {
        $(window).scroll(function(){
            var navbar = $('.ftco_navbar');

            // Always visible with black background after any scroll
            if ($(this).scrollTop() > 0) {
                navbar.addClass('scrolled awake');
                navbar.css({
                    'background': 'black',
                    'position': 'fixed',
                    'top': '0',
                    'width': '100%',
                    'z-index': '999'
                });
            } else {
                navbar.removeClass('sleep');
                navbar.css({
                    'background': 'black',
                    'position': 'fixed',
                    'top': '0',
                    'width': '100%',
                    'z-index': '999'
                });
            }
        });
    };
    scrollWindow();

    // Counter
    var counter = function() {
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction){
            if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                $('.number').each(function(){
                    var $this = $(this), num = $this.data('number');
                    $this.animateNumber({ number: num, numberStep: comma_separator_number_step }, 7000);
                });
            }
        }, { offset: '95%' });
    };
    counter();

    // Content Waypoint Animations
    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction){
            if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    $('body .ftco-animate.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout(function(){
                            var effect = el.data('animate-effect');
                            if(effect === 'fadeIn') el.addClass('fadeIn ftco-animated');
                            else if(effect === 'fadeInLeft') el.addClass('fadeInLeft ftco-animated');
                            else if(effect === 'fadeInRight') el.addClass('fadeInRight ftco-animated');
                            else el.addClass('fadeInUp ftco-animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '95%' });
    };
    contentWayPoint();

    // Magnific Popup for images
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: { enabled: true, navigateByImgClick: true, preload: [0,1] },
        image: { verticalFit: true },
        zoom: { enabled: true, duration: 300 }
    });

    // Magnific Popup for videos and maps
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

})(jQuery);
