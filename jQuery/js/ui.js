var FE =
  window.FE ||
  (function () {
    return {
      slideUI: function () {
        var $mb = $(".m-banner-wrap");
        var initObj = function (top) {
          return {
            top: top,
            opacity: 0,
          };
        };
        var runObj = {
          top: 0,
          opacity: 1,
        };
        var delay = 200;

        var mBanner = $mb.find(".m-banner").slick({
          dots: true,
          appendDots: $mb.find(".m-banner-pager"),
          autoplay: true,
          autoplaySpeed: 3000,
          fade: true,
          infinite: true,
          speed: 500,
          arrows: false,
          draggable: true,
          touchThreshold: 100,
          slidesToShow: 1,
          slidesToScroll: 1,
        });

        $mb.find(".m-banner-btn.prev").on("click", function (e) {
          e.preventDefault();
          mBanner.slick("slickPrev");
        });
        $mb.find(".m-banner-btn.next").on("click", function (e) {
          e.preventDefault();
          mBanner.slick("slickNext");
        });
        var $slide = $mb.find(".slick-slide");
        $slide.eq(0).find(".item").addClass("on");
        $slide.eq(0).find("h2").animate(runObj, delay);
        $slide.eq(0).find(".intro").delay(delay).animate(runObj, delay);
        $slide
          .eq(0)
          .find(".btn-group")
          .delay(delay * 2)
          .animate({ bottom: 40, opacity: 1 }, delay);
        mBanner.on("afterChange", function (event, slick, currentSlide) {
          if (currentSlide === 0) {
            $mb.addClass("on-1");
            $mb.removeClass("on-2 on-3 on-4");
          } else if (currentSlide === 1) {
            $mb.addClass("on-2");
            $mb.removeClass("on-1 on-3 on-4");
          } else if (currentSlide === 2) {
            $mb.addClass("on-3");
            $mb.removeClass("on-1 on-2 on-4");
          } else if (currentSlide === 3) {
            $mb.addClass("on-4");
            $mb.removeClass("on-1 on-2 on-3");
          }
          var $slide = $mb.find(".slick-slide");
          // run effects
          $slide.eq(currentSlide).find(".item").addClass("on");
          $slide.eq(currentSlide).find("h2").animate(runObj, delay);
          $slide
            .eq(currentSlide)
            .find(".intro")
            .delay(delay)
            .animate(runObj, delay);
          $slide
            .eq(currentSlide)
            .find(".btn-group")
            .delay(delay * 2)
            .animate({ bottom: 40, opacity: 1 }, delay);

          // init
          $slide.eq(currentSlide).siblings().find(".item").removeClass("on");
          $slide
            .eq(currentSlide)
            .siblings()
            .find("h2")
            .stop(true)
            .css(initObj(-30));
          $slide
            .eq(currentSlide)
            .siblings()
            .find(".intro")
            .stop(true)
            .css(initObj(30));
          $slide
            .eq(currentSlide)
            .siblings()
            .find(".btn-group")
            .stop(true)
            .css({ bottom: 20, opacity: 0 });
        });
      },
    };
  })();
