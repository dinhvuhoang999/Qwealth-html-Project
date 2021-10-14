$(function () {
  $(window).scroll(function () {
    if ($("body,html").scrollTop() > 0) {
      $(".navbar-qweath").addClass("background-nav-scroll");
      $(".about-page .nav-link").css("color", "#333333");
    } else {
      $(".navbar-qweath").removeClass("background-nav-scroll");
    }
  });
});

function checkWidth() {
  var windowSize = $(window).width();

  if (windowSize < 991) {
    $(".navbar-qweath").addClass("navbar-jquery");
  } else {
    $(".navbar-qweath").removeClass("navbar-jquery");
  }
}

checkWidth();

function changePositionOfArrow(classOfSlide) {
  setTimeout(() => {
    const theDot = $(`${classOfSlide} ul.slick-dots li`);
    if (theDot.length) {
      const mlLiTag = parseInt(theDot.css("margin-left"));
      const mrLiTag = parseInt(theDot.css("margin-left"));
      const widthLiTag = parseInt(theDot.css("width"));
      const totalSpaceOfListLi =
        ((mlLiTag + mrLiTag + widthLiTag) * theDot.length) / 2 + 5;
      $(`${classOfSlide} .fa-arrow-left`).css({
        left: "auto",
        right: `calc(50% + ${totalSpaceOfListLi}px)`,
      });
      $(`${classOfSlide} .fa-arrow-right`).css({
        left: `calc(50% + ${totalSpaceOfListLi}px)`,
      });
    }

  }, 0);
}

$(window).resize(() => {
  checkWidth();
  changePositionOfArrow(".slide-homepage");
  changePositionOfArrow(".about-slide");
});

$(function () {
  $(".slide-homepage").slick({
    dots: true,
    infinite: false,
    variableWidth: true,
    prevArrow: '<i class="fas fa-arrow-left custom-slide-arrow"></i>',
    nextArrow: '<i class="fas fa-arrow-right custom-slide-arrow"></i>',
    init: changePositionOfArrow(".slide-homepage"),
    dotsClass: "slick-dots custom-slide-dot",
  });
});

$(document).ready(function () {
  $(function () {
    $.validator.addMethod(
      "regex",
      function (value, element, param) {
        return (
          this.optional(element) ||
          value.match(typeof param == "string" ? new RegExp(param) : param)
        );
      },
      "Please enter a value in the correct format."
    );

    $("#register").validate({
      rules: {
        email: {
          required: true,
          regex: "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$",
        },
      },
      messages: {
        email: {
          required: "Please provide an email",
          regex: "Wrong style email",
        },
      },
      submitHandler: function (form) {
        form.submit();
      },
    });

    $("#signin").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          regex: "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$",
        },
        mes: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please provide your name",
        },

        email: {
          required: "Please provide an email",
          regex: "Wrong style email",
        },
        mes: {
          required: "Please provide a message",
        },
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
    prevArrow: ".arrow-pre",
    nextArrow: ".arrow-next",
    variableWidth: true,
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
    $("html, body").animate(
      {
        scrollTop: $(".interview").offset().top - 70,
      },
      1000
    );
  });
});

$(function () {
  $(".about-slide").slick({
    dots: true,
    infinite: false,
    prevArrow: '<i class="fas fa-arrow-left custom-slide-arrow"></i>',
    nextArrow: '<i class="fas fa-arrow-right custom-slide-arrow"></i>',
    init: changePositionOfArrow(".about-slide"),
    dotsClass: "slick-dots custom-slide-dot",
    variableWidth: true,
  });
});

$(function () {
  jQuery.fn.center = function (parent) {
    if (parent) {
      parent = this.parent();
    } else {
      parent = window;
    }
    this.css({
      position: "absolute",
      top:
        ($(parent).height() - this.outerHeight()) / 2 +
        $(parent).scrollTop() +
        "px",
      left:
        ($(parent).width() - this.outerWidth()) / 2 +
        $(parent).scrollLeft() +
        "px",
    });
    return this;
  };
});

// trongnd
$(function () {
  $(".member__slick__slider").slick({
    dots: true,
    // slidesToShow: 2.5,
    arrows: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
    ]
  });
});