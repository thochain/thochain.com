(function ($) {

    "use strict";

    //WOW JS
    new WOW().init();

    //Navbar Srink
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });

    //Page Smooth Scroll
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 1000,
        easing: 'easeInQuint',
        offset: 0,
        callback: function (anchor, toggle) {}
    });

    //Remove iframe scrolling
    $('.iphonex-mockup iframe').attr('scrolling', 'no');

     // ICO countdown
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(
                '<div class="col"><div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div></div><div class="col"><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div></div><div class="col"><div class="cdown"><span class="minutes"><strong>%M</strong> <p>Minutes.</p></span></div></div><div class="col"><div class="cdown"><span class="second"><strong> %S</strong><p>Second.</p></span></div></div>'
            ));
        });
    });

    // mailchimp start
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "http://thochain.us19.list-manage.com/subscribe/post?u=148778f2ba05f1329d11c482b&amp;id=a4dee254bd" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html(resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html(resp.msg).fadeIn(1000);
        }
    }

    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };



    //Timline
     $(".timeline .row:even .col-lg-4").addClass("offset-lg-6 offset-md-6");
     $(".timeline .row:even .col-lg-4 .timeline-item").addClass("timeline-right");
     $(".timeline .row:odd .col-lg-4").addClass("offset-lg-2 text-md-right");
     $(".timeline .row:odd .col-lg-4 .timeline-item").addClass("timeline-left");

     //Back to top

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    
     // Color Preset
    if ($(".rishad_switcher_zone").length > 0)
    {
        if ($(".stopped-color").length > 0) {
            $(".stopped-color").on("click", function () {
                var grcolors = $(this).attr("href");
                $("#grad_triggerColor").attr("href", "assets/css/colors/gradient/" + grcolors + ".css");
            });
        }
        //switcher 
        var switchs = true;
        $(".settingBtn").on("click", function (e)
        {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass("active");
                $(".rishad_switcher_zone").animate({"right": "0px"}, 400);
                switchs = false;
            }
            else
            {
                $(this).removeClass("active");
                $(".rishad_switcher_zone").animate({"right": "-290px"}, 400);
                switchs = true;
            }
        });
    }
    
     // cryptorio_chart
     function cryptorio_chart() {
        var ctx = document.getElementById("myChart").getContext('2d');
        var ctx2 = document.getElementById("myChart2").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Token AirDrop", "Research & Development", "Bounty Program"],
                datasets: [{
                    label: '# of Votes',
                    data: [40, 40, 20],
                    backgroundColor: [
                        '#417AFF',
                        '#DE4A30',
                        '#E69E04'
                    ],
                    borderColor: [
                        '#417AFF',
                        '#DE4A30',
                        '#E69E04'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
            }
        });
        var myChart2 = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: ["Research", "Development", "Administrative"],
                datasets: [{
                    label: '# of Votes',
                    data: [45, 35, 20],
                    backgroundColor: [
                        '#417AFF',
                        '#E79E05',
                        '#20B977'
                    ],
                    borderColor: [
                        '#417AFF',
                        '#E79E05',
                        '#20B977'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                }
            }
        });
    }
    return cryptorio_chart();


})(jQuery);