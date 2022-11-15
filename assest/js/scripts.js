    $('.deals-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.our-team-carousel').owlCarousel({
        loop: true,
        items:1,
        responsive: {
            0: {
                items: 1,
                
            },
            800: {
                items: 2,
            },
            1500:{
                items:3
            },
            1600:{
                items:4
            }
        }
    })
    $('.mobile-menu-btn').click(function (){
        $('.mobile-nav-menu').toggle();
    })
    // $('.btn-next-ads').click(function() {
    //     owl.trigger('next.owl.carousel');
    // })
    // $('.btn-prev-ads').click(function() {
    //     owl.trigger('next.owl.carousel');
    // })