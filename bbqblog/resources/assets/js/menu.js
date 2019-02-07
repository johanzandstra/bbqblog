(function($) {
    "use strict"; // Start of use strict

    // Show the navbar when the page is scrolled up
    let MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        let headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                let currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            }
        );
    }
})(jQuery); // End of use strict