$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  });
  $(".stories-slider").slick();
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "Name must contain more than 2 characters",
        },
        email: {
          required: "Enter your email",
          email: "Your email address must be name@domain.com",
        },
        phone: {
          required: "Enter your phone",
          minlength: "The number must contain at least 10 characters",
        },
      },
    });
  });
});
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("привет");
  document
    .querySelector(".navbar-menu__list")
    .classList.toggle("navbar-menu__list_visited");
});
var CloseMenuButton = document.querySelector(".navbar-menu__item_hidden");
CloseMenuButton.addEventListener("click", function () {
  console.log("привет");
  document
    .querySelector(".navbar-menu__list")
    .classList.remove("navbar-menu__list_visited");
});
$(document).ready(function () {
  var tabItem = $(".trending-info__link");
  var content = $(".trending__card");
  tabItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    $(tabItem).removeClass("trending-info__link_active");
    $(content).removeClass("trending__card_active");
    $(activeContent).addClass("trending__card_active");
    $(this).addClass("trending-info__link_active");
  });
});
