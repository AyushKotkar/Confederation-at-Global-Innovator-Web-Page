jQuery(function($) {
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 15000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function() {
        $videoSrc = $(this).attr("data-src");
        console.log("button clicked" + $videoSrc);
    });

    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function(e) {
        console.log("modal opened" + $videoSrc);
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
            "src",
            $videoSrc + "?amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"
        );
    });

    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function(e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
    });

    // document ready
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        dots: false,
        margin: 20,
        // stagePadding: 50,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});