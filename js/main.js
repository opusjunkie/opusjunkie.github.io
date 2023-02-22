(function ($) {
    "use strict";

    // hide only profile information if the link contains profile
    const url = window.location.href;
    if (url.includes('portfolio')) {
        $('.market').show();
    } else {
        $('.market').hide();
    }

    // Cache repeated selectors
    const $backToTop = $('.back-to-top');
    const $navbar = $('.navbar');
    const $navbarLinks = $(".navbar-nav a");

    // Loader
    const loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        const $this = $(this);
        if ($this.scrollTop() > 200) {
            $backToTop.fadeIn('slow');
        } else {
            $backToTop.fadeOut('slow');
        }
        if ($this.scrollTop() > 0) {
            $navbar.addClass('nav-sticky');
        } else {
            $navbar.removeClass('nav-sticky');
        }
    });

    $backToTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Smooth scrolling on the navbar links
    $navbarLinks.on('click', function (event) {
        const hash = this.hash;
        if (hash !== "") {
            event.preventDefault();
            const $this = $(this);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            if ($this.parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $this.closest('a').addClass('active');
            }
        }
    });

    // Typed Initiate
//    const $typedH2 = $('.hero .hero-text h2');
//    if ($typedH2.length === 1) {
//        const typedStrings = $('.hero .hero-text .typed-text').text();
//        const typed = new Typed($typedH2.get(0), {
//            strings: typedStrings.split(', '),
//            typeSpeed: 100,
//            backSpeed: 20,
//            smartBackspace: false,
//            loop: true
//        });
//    }

    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // Portfolio filter
    const $portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        const $this = $(this);
        $("#portfolio-filter li").removeClass('filter-active');
        $this.addClass('filter-active');
        $portfolioIsotope.isotope({ filter: $this.data('filter') });
    });
})(jQuery);
