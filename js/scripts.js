

(function($) {
    "use strict";
    $(function(){

        /*  Main menu
        ==============================================*/

        $('.header-menu a[href="#"]').on('click', function(event) {
            event.preventDefault();
        });

        $(".header-menu").menumaker({
            title: '<i class="fa fa-bars"></i>',
            format: "multitoggle"
        });

        var mainHeader = $('.main-header');
        
        if(mainHeader.length) {
            var sticky = new Waypoint.Sticky({
                element: mainHeader[0]
            });
        }

        
        /*  Background image
        ==============================================*/

        var bgImg = $('[data-bg-img]');

        bgImg.css('background', function(){
            return 'url(' + $(this).data('bg-img') + ') center center';
        });


        /*  Parsley form validation
        ==============================================*/

        $('.parsley-validate, .parsley-validate-wrap form').parsley();


        /*  Smooth scroll for comment reply
        ==============================================*/
        
        var $commentContent = $('.comment-content > a');
        
        $commentContent.on('click', function(event){
            event.preventDefault();
            var $target = $('.comment-form');
            
            if ( $target.length ) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 120
                }, 500);

                $target.find('textarea').focus();
            }
        });

        
        /*  Main slider
        ==============================================*/
        
        var mainSlider = new Swiper('.main-slider', {
            loop: true,
            spaceBetween: 1,
            speed: 500,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.main-slider-pagination',
                clickable: true,
            }
        });

        mainSlider.on('slideChangeTransitionStart', function () {
            var $el = $(this.slides[ this.activeIndex ]),
                $animate = $el.find('[data-animate]');

            $animate.each(function () {
                var $t = $(this);

                $t.removeClass( 'animated ' + $t.data('animate') );
            });
        }).on('slideChangeTransitionEnd', function () {
            var $el = $(this.slides[ this.activeIndex ]),
                $animate = $el.find('[data-animate]');

            $animate.each(function () {
                var $el = $(this),
                    $duration = $el.data('duration'),
                    $delay = $el.data('delay');

                $duration = typeof $duration === 'undefined' ? '0.6' : $duration;
                $delay = typeof $delay === 'undefined' ? '0' : $delay;

                $el.addClass( 'animated ' + $el.data('animate') ).css({
                    'animation-duration': $duration + 's',
                    'animation-delay': $delay + 's'
                });
            });
        });

        /*  Video popup
        ==============================================*/

        var $youtubePopup = $('.youtube-popup');

        if($youtubePopup.length) {
            $youtubePopup.magnificPopup({
                type:'iframe'
            });
        }

        /*  Back to top button
        ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    
        /*  Ajax Contact Form
        ==============================================*/

        $('.contact-form').on('submit', 'form', function(e) {
            e.preventDefault();

            var $el = $(this);

            $.post($el.attr('action'), $el.serialize(), function(res){
                res = $.parseJSON( res );
                $el.parent('.contact-form').find('.form-response').html('<span>' + res[1] + '</span>');
            });
        });

        /*  Intro item height
        ==============================================*/

        function pageItemHeight(){
            $('.page-image').height(
                function(){
                    return $(this).width();
                }
            );
        }

        pageItemHeight();
        
        $(window).resize( function(){
            pageItemHeight();
        });
    });
    
    /*  Preloader
    ==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });


    /*  Content animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '0' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });
    });

})(jQuery);


    /*  Review slider
        ==============================================*/
        
        var reviewSlider = new Swiper('.review-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.prev-review',
                prevEl: '.next-review',
            },
            breakpoints: {
                // when window width is <= 991px
                991: {
                    slidesPerView: 1
                }
            }
        });


        /* Team slider
        ==============================================*/
        
        var reviewSlider = new Swiper('.news-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.prev-news',
                prevEl: '.next-news',
            },
            breakpoints: {
                // when window width is <= 991px
                991: {
                    slidesPerView: 2
                },
                // when window width is <= 767px
                767: {
                    slidesPerView: 1
                }
            }
        });