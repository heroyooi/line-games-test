import React, { useState, useRef, useCallback, useMemo, memo } from "react";
import Slick from "react-slick";
import classNames from "classnames/bind";
import { slideData } from "@data";
import { SliderWrapper, SliderPager } from "./styles";
import utils from "@utils/commonUtils";

const Slider = () => {
  const [mode, setMode] = useState(1);
  const slickEl = useRef(null);

  const getClassByMode = useMemo(() => `on-${mode}`, [mode]);

  const onPrev = useCallback(() => {
    slickEl.current.slickPrev();
  }, []);

  const onNext = useCallback(() => {
    slickEl.current.slickNext();
  }, []);

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <SliderPager>
        <ul className={getClassByMode}>{dots}</ul>
      </SliderPager>
    ),
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
    beforeChange: (current, next) => {
      setMode(next + 1);
    },
  };

  return (
    <SliderWrapper className={getClassByMode}>
      <Slick ref={slickEl} {...settings}>
        {slideData.map((slide) => {
          return (
            <div key={slide.id}>
              <img className="mv-img" src={slide.img} alt="" />
              <div className="mv-con">
                <h2 className={classNames({ on: mode === slide.id })}>
                  {slide.title}
                </h2>
                <p
                  className={classNames("intro", { on: mode === slide.id })}
                  dangerouslySetInnerHTML={{
                    __html: utils.checkedBrTag(slide.intro),
                  }}
                />
                <span
                  className={classNames("btn-group", { on: mode === slide.id })}
                >
                  {slide.links.home && (
                    <a
                      href={slide.links.home}
                      className="btn-home"
                      target="_blank"
                    >
                      ??? ??????
                    </a>
                  )}
                  {slide.links.play && (
                    <a
                      href={slide.links.play}
                      className="btn-play"
                      target="_blank"
                    >
                      ?????? ??????
                    </a>
                  )}
                </span>
              </div>
              {slide.items?.map((v, i) => {
                return (
                  <span
                    className={classNames(`item ${v.addClass}`, {
                      on: mode === slide.id,
                    })}
                  >
                    <img src={v.src} alt="" />
                  </span>
                );
              })}
            </div>
          );
        })}
      </Slick>
      <button className="m-banner-btn prev" onClick={onPrev}>
        ??????
      </button>
      <button className="m-banner-btn next" onClick={onNext}>
        ??????
      </button>
    </SliderWrapper>
  );
};

export default memo(Slider);
