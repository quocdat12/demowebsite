var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });
  var swiper = new Swiper(".homeSwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 5000,
    },
    mousewheel: true,
    keyboard: true,
  });


  $(function() {
    $('.id01').hover(function() {
      $('.gp01').toggleClass('giaiphap1')
    });
    $('.id02').hover(function() {
      $('.gp02').toggleClass('giaiphap1')
    });
    $('.id03').hover(function() {
      $('.gp03').toggleClass('giaiphap1')
    });
    $('.id04').hover(function() {
      $('.gp04').toggleClass('giaiphap1')
    });
    $('.id05').hover(function() {
      $('.gp05').toggleClass('giaiphap1')
    });
    $('.id06').hover(function() {
      $('.gp06').toggleClass('giaiphap1')
    });
    $('.id07').hover(function() {
      $('.gp07').toggleClass('giaiphap1')
    });
    $('.tt1').hover(function(){
      $('.loi-ich-1').toggleClass('hu')
    });
    $('.tt2').hover(function(){
      $('.loi-ich-4').toggleClass('hu')
    });
    $('.tt3').hover(function(){
      $('.loi-ich-2').toggleClass('hu')
    });
    $('.tt4').hover(function(){
      $('.loi-ich-3').toggleClass('hu')
    });
});