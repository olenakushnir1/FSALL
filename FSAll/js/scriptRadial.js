
let prevDropOpened = null;
$(".circle-elements").on("click", function (event) {
    console.log(event.target);
    console.log(document.getElementById(event.target.getAttribute('dropid')));
    let dropdown = $(`#${event.target.getAttribute('dropid')}`);
    let dropdownImg = $(`#${event.target.getAttribute('dropid')}i`);
    console.log(dropdown.attr('id'));
    console.log(dropdownImg.attr('id'));
    console.log(dropdown.css("display"));
    if (dropdown.css("display") == "none")  {
        dropdown.css({"display": "flex"});
        console.log(dropdown.css("display"));
        if (dropdownImg) {
            dropdownImg.css({"display": "none"});
        }
        if (prevDropOpened && prevDropOpened.attr('id') != dropdown.attr('id')) {
            prevDropOpened.css({"display": "none"});

            let prevImg = $(`#${prevDropOpened.attr('id')}i`);
            if (prevImg) {
                prevImg.css({"display": "block"});
            }
        }
        prevDropOpened = dropdown;
    } else {
        dropdown.css({"display": "none"});
        if (dropdownImg) {
            dropdownImg.css({"display": "block"});
        }
    }

});
$('#4diii').click();
$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI  * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

})

$(document).ready(function () {


    
    $(".menu-item-science").click(function () {
        $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        $(".menu-science-subitems").fadeToggle();
    });

    $(".dropdown-btn").on("click", function () {
        var dropdown = $(".dropdown-content");
        if ($(".mobile").css("display") == "none") {
            dropdown.fadeToggle();
        } else {
            if (dropdown.css("display") == "none") {
                dropdown.css({"display": "block"});
                dropdown.animate({"right": "0"}, 500);
            } else {
                dropdown.animate({"right": "-350px"}, 500, function () {
                    dropdown.css({"display": "none"});
                });
            }
        }


    });

});