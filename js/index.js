$(function () {
  $(window).scroll(function () {
    if ($('body,html').scrollTop() > 0) {
      $('.navbar-qweath').addClass('background-nav-scroll')
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
// Bind event listener
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
        console.log(param);
        console.log(value);
        return this.optional(element) ||
          value.match(typeof param == 'string' ? new RegExp(param) : param);
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
          required: "provide email",
          regex: "wrong style email"
        }
      },
      submitHandler: function (form) {
        form.submit();
        console.log("submit");
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
          required: "Please enter your Name"
        },

        email: {
          required: "Please provide a Email",
          regex: "Wrong style Email",
        },
        mes: {
          required: "Please provide a Message",
        }

      },
      submitHandler: function (form) {
        form.submit();
        console.log("submit");
      },
    });
  });
});

$(document).ready(function () {
  $(".dropdown-item").click(function () {
    $(".dropdown-item").val("1");
    console.log($(".dropdown-item").value);
  });
});



// blog
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
    console.log(text)
    $("#dropdownMenuButton").text(this.outerText);
  });
});
// 

// slide

$(function () {

  $(".about-slide").slick({
    dots: true,
    infinite: false,
    prevArrow: '.arrow-pre-about',
    nextArrow: '.arrow-next-about',
    variableWidth: true,
  });
});