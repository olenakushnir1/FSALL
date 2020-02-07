
$(window).scroll(function () {
    $('.sec2').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            $('.flask').css({
                'animation-name': 'blinker',
                'animation-duration': '6s',
                'animation-iteration-count': 1,
                'animation-direction': 'alternate',
            })

        }
    });
      $('.sec4').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            $('.productbox').css({
                'animation-name': 'blinker',
                'animation-duration': '7s',
                'animation-iteration-count': 1,
                'animation-direction': 'alternate',
            })

        }
    });
}).trigger('scroll');