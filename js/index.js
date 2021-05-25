$(function () {
    $(window).scroll(function () {
        if ($('body,html').scrollTop() > 0) {
            $('.navbar-qweath').addClass('background-nav-scroll')
            $('.about-page .nav-link').css('color', '#333333')
        } else {
            $('.navbar-qweath').removeClass('background-nav-scroll')
        }
    })
})

function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize < 991) {
        $('.navbar-qweath').addClass('navbar-jquery');
    } else {
        $('.navbar-qweath').removeClass('navbar-jquery');
    }
}

checkWidth();

$(window).resize(checkWidth);

$(function () {
    $(".slide-homepage").slick({
        dots: false,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        variableWidth: true
    });
});

$(document).ready(function () {
    $(function () {
        $.validator.addMethod('regex', function (value, element, param) {
                return this.optional(element) || value.match(typeof param == 'string' ? new RegExp(param) : param);
            },
            'Please enter a value in the correct format.');

        $("#register").validate({
            rules: {
                email: {
                    required: true,
                    regex: '^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$'
                }
            },
            messages: {
                email: {
                    required: "Please provide an email",
                    regex: "Wrong style email"
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $("#signin").validate({
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    regex: '^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$',
                },
                mes: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Please provide your name"
                },

                email: {
                    required: "Please provide an email",
                    regex: "Wrong style email",
                },
                mes: {
                    required: "Please provide a message",
                }

            },
            submitHandler: function (form) {
                form.submit();
            },
        });
    });
});

$(document).ready(function () {
    $(".dropdown-item").click(function () {
        $(".dropdown-item").val("1");
    });
});

$(function () {
    $(".blog-slide").slick({
        dots: true,
        infinite: false,
        prevArrow: '.arrow-pre',
        nextArrow: '.arrow-next',
        variableWidth: true
    });
});

$(document).ready(function () {
    var a = $(".item-select").first().text();
    $("#dropdownMenuButton").text(a);
    $(".dropdown-item").click(function () {
        const text = this.outerText;
        $("#dropdownMenuButton").text(this.outerText);
    });
});

$(document).ready(function () {
    $(".link-learn-banner").click(function () {
        $('html, body').animate({
            scrollTop: $('.interview').offset().top - 70
        }, 1000)
    })
})

$(function () {
    $(".about-slide").slick({
        dots: true,
        infinite: false,
        prevArrow: '.arrow-pre-about',
        nextArrow: '.arrow-next-about',
        variableWidth: true,
    });
});

jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
}
