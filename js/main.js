(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    var iframe = document.getElementById("contact-form-frame");

    iframe.onload = function(){
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    $(document).ready(function () {
      // Define the Odoo server URL and database name
      var serverUrl = 'http://mashood.odoo.com';
      var dbName = 'mashood';

      // Define the Odoo username and password
      var username = 'mashoodwyd@gmail.com';
      var password = 'Mash.227';

      // Define the XML-RPC method and parameters
      var method = 'execute_kw';
      var model = 'res.partner';
      var args = [[['is_company', '=', true]], ['name', 'country_id', 'comment']];
      var kwargs = {context: {}};

      // Define the XML-RPC client options
      var options = {
        url: serverUrl + '/xmlrpc/2/common',
        headers: {"Content-Type": "application/xml"},
      };

      // Attach a click event handler to the button
      $('#contactme').click(function () {
        // Authenticate with the Odoo server and get the user ID
        $.xmlrpc({
          url: options.url,
          methodName: 'authenticate',
          params: [dbName, username, password, {}],
          success: function (response, status, jqXHR) {
            // Create an XML-RPC client for the model methods
            var uid = response[0];
            var models = new xmlrpc.XmlRpcClient(options);

            // Call the model method and log the result
            models.methodCall(method, [dbName, uid, password, model, 'search_read', args, kwargs], function (err, value) {
              if (err) {
                console.error(err);
              } else {
                console.log(value);
              }
            });
          },
          error: function (jqXHR, status, error) {
            console.error(error);
          },
        });
      });
    });

    
})(jQuery);

