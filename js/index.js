$(function () {
  $(window).scroll(function () {
    if ($('body,html').scrollTop() > 100) {
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

  $(".variable").slick({
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
        },
        mes: {
          required: "nhập email",
        }

      },
      submitHandler: function (form) {
        form.submit();
        console.log("submit");
      },
    });
  });
});