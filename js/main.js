/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
 "use strict";
 !(function (){

  //ниже для бургера
 var i = document.querySelector(".burger"),
 a = document.querySelector(".nav"),
 u = a.querySelectorAll(".nav__link");
i.addEventListener("click", function (e) {
 a.classList.toggle("nav--active"),
   i.classList.toggle("burger--active");
}),
 u.forEach(function (e) {
   e.addEventListener("click", function (e) {
     e.preventDefault(),
       i.classList.remove("burger--active"),
       a.classList.remove("nav--active");
   });
 });



//ниже для аккордеона чето бля надо разбираться в буквх этих
 var e = document.querySelector(".accordion"),
    t = e.querySelectorAll(".accordion__item");
  function o() {
    var e = this.parentNode;
    t.forEach(function (t) {
      e !== t ? t.classList.remove("active") : e.classList.toggle("active");
    });
  }
  e.querySelectorAll(".accordion__header").forEach(function (e) {
    return e.addEventListener("click", o);
  });

  //ниже карта

"use strict";function init(){var o=new ymaps.Map("modal__content__maps",{center:[59.93587895726406,30.32601556825967],zoom:17,controls:["zoomControl"]}),a=new ymaps.Placemark([59.93587895726406,30.32601556825967],{});o.geoObjects.add(a)}ymaps.ready(init);

//ниже главный скрипт карты
var c = document.querySelectorAll("[data-open-modal]"),
    n = document.querySelectorAll("[data-close-modal]"),
    l = document.querySelector(".modal__overlay");
  function r(e) {
    null !== e &&
      (e.classList.remove("active"),
      l.classList.remove("active"),
      (document.querySelector("html").style.overflowY = "auto"),
      (document.onkeydown = null));
  }
  c.forEach(function (e) {
    e.addEventListener("click", function (t) {
      !(function (e) {
        if (null === e) return;
        e.classList.add("active"),
          l.classList.add("active"),
          (document.querySelector("html").style.overflowY = "hidden"),
          (document.onkeydown = function (e) {
            document.querySelectorAll(".modal.active").forEach(function (t) {
              "Escape" === e.key && (r(t), e.preventDefault());
            });
          });
      })(document.querySelector(e.dataset.openModal));
    });
  }),
    n.forEach(function (e) {
      e.addEventListener("click", function (t) {
        r(e.closest(".modal"));
      });
    }),
    l.addEventListener("click", function (e) {
      document.querySelectorAll(".modal.active").forEach(function (e) {
        r(e);
      });
    });


  /* let accordion = document.querySelector('.accordion__item');
  accordion.onclick = function() {
    accordion.classList.toggle('active');
  }; */


//ниже для скролла шапки, мега-простая и понятная вещь
 var d = document.querySelector(".intro"),
    s = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    window.scrollY >= d.offsetHeight
      ? (s.classList.add("header--fixed"))
      : (s.classList.remove("header--fixed"));
  });

})();

// ниже jq, стоило бы подключить в отдельном файле но надо менять сборку гульпа
"use strict";
$(document).ready((function () {
    $("[data-scroll]").on("click", (function (t) {
        t.preventDefault();
        var o = $(this).data("scroll"),
            a = $(o).offset().top;
        $("html, body").animate({
            scrollTop: a
        }, 1e3)
    }))
}));


