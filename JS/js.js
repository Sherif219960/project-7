$(document).ready(function () {

    // counter up
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-target');
            const count = +counter.innerHTML;
            const speed = target / delay;
            if (count < target) {
                counter.innerHTML = count + speed;
                setTimeout(updateCount, 1);
            } else {
                counter.innerHTML = target;
            }
        };
        updateCount();
    });
    // window scroll 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.nav-top').fadeIn(500);
            $('.nav-left').fadeOut(500);
        } else {
            $('.nav-top').fadeOut(500);
            $('.nav-left').fadeIn(500);

        }

    });

    // owl carousel
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450

    });

    // open side-menu
    $('.menu').on('click', function () {
        $('.side-menu').toggleClass('open');
    });
    $('.close').on('click', function () {
        $('.side-menu').removeClass('open');
    });

    // countDown
    var content = $('.countDown').html();
    $('.countDown').countdown('2022/12/01', function (event) {
        $(this).html(event.strftime(content));
    });

    // owlCarousel brands

    $('.brands .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 4,
            },
            992: {
                items: 6,
            }
        }

    });

    // switch Style 
    let link = $('link[data-color="switch"]');
    let logo = $('.logo img');
    $('.fa-moon').on('click', function () {
        if (link.attr('href') === './CSS/StyleDark.css') {
            link.attr('href', './CSS/styleLight.css');
            logo.attr('src', './images/logo-dark.png');
        } else {
            link.attr('href', './CSS/styleDark.css');
            logo.attr('src', './images/logo.png');
        }
    });
});

