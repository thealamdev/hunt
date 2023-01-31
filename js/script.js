 $(function () {
   // service slider js code ====

   $('.s_slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     vertical: true,
     dots: false,
     arrows: true,
     nextArrow: '.next_arrow',
     prevArrow: '.prev_arrow',
     centerMode: true,
     centerPadding: 0,
   });


   // slider testimonial =====
   $('.test_for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     fade: false,
     dots: false,
     asNavFor: '.test_nav',
     infinite: true,
     centerPadding: 0,

   });
   $('.test_nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.test_for',
     dots: false,
     autoplay: true,
     centerMode: true,
     focusOnSelect: true,
     vertical: true,
     fade: false,
     arrows: false,
     infinite: true,
     centerPadding: 0,

   });

   //  counter js code here ============

   $(window).on("load resize", function () {

     var counters = $(".count");
     var countersQuantity = counters.length;
     var counter = [];

     for (i = 0; i < countersQuantity; i++) {
       counter[i] = parseInt(counters[i].innerHTML);
     }

     var count = function (start, value, id) {
       var localStart = start;
       setInterval(function () {
         if (localStart < value) {
           localStart++;
           counters[id].innerHTML = localStart;
         }
       }, 4);
     }

     for (j = 0; j < countersQuantity; j++) {
       count(0, counter[j], j);
     }
   });

   // typed js code ===
   var typed = new Typed('.auto-input', {
     strings: ['Designer', 'Developer', 'Creative'],
     smartBackspace: true,
     typeSpeed: 100,
     backSpeed: 100,
     loop: true,
   });


   // sticky-header js code
   $(window).scroll(function () {
     var scrolling = $(this).scrollTop();

     if (scrolling > 200) {
       $('.navbar').addClass('sticky_header');
     } else {
       $('.navbar').removeClass('sticky_header');
     }
   });

   // back to top start =====
   //==== Back-to-top button
   $(window).on('scroll', function (event) {
     if ($(this).scrollTop() > 600) {
       $('.back-to-top').fadeIn(200)
     } else {
       $('.back-to-top').fadeOut(200)
     }
   });
   //==== Animate the scroll to top
   $('.back-to-top').on('click', function (event) {
     event.preventDefault();

     $('html, body').animate({
       scrollTop: 0,
     }, 1000);
   });
   // back to top end =======


 });