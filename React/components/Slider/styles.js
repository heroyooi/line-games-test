import styled from "@emotion/styled";

const MajorColor1 = "rgba(0, 203, 255, 1)";
const MajorColor2 = "rgba(95, 51, 146, 1)";
const MajorColor3 = "rgba(0, 148, 183, 1)";
const MajorColor4 = "rgba(255, 117, 16, 1)";

export const SliderWrapper = styled.div`  
  position: relative;
  overflow: hidden;
  z-index: 1;
  position: relative;
  left: 50%;
  width: 1920px;
  margin-left: -960px;
  .slick-slide {
    height: 920px;
    overflow: hidden;
    .mv-img {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -webkit-transition: transform 1.5s
        cubic-bezier(0.58, 0.36, 0.84, 0.87);
      -moz-transition: transform 1.5s cubic-bezier(0.58, 0.36, 0.84, 0.87);
      -o-transition: transform 1.5s cubic-bezier(0.58, 0.36, 0.84, 0.87);
      transition: transform 1.5s cubic-bezier(0.58, 0.36, 0.84, 0.87);
    }
    &.slick-active .mv-img {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    .mv-con {
      width: 1200px;
      height: 540px;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 50%;
      margin-left: -600px;
      top: 50%;
      margin-top: -270px;
      padding: 95px 60px 40px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      h2,
      .intro,
      .btn-group {
        position: relative;
        color: #fff;
        opacity: 0;
        transition: opacity 0.3s, top 0.3s, bottom 0.3s;
      }
      
      h2 {
        top: -30px;
        font-weight: bold;
        font-size: 70px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
        &.on {
          top: 0;
          opacity: 1;
        }
      }
      .intro {
        top: 30px;
        padding-top: 25px;
        margin-top: 25px;
        font-size: 14px;
        line-height: 1.6;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
        &:before {
          content: "";
          display: block;
          width: 50px;
          height: 3px;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.7;
          transition: background-color 0.3s;
        }
      }
      h2,
      .intro {
        &.on {
          top: 0;
          opacity: 1;
        }
      }
      .btn-group {
        position: absolute;
        left: 60px;
        bottom: 20px;
        display: block;
        width: 100%;
        &.on {
          opacity: 1;
          bottom: 40px;
        }
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        .btn-home,
        .btn-play {
          margin-top: 30px;
          float: left;
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 40px;
          transition: background-color 0.3s;
          font-size: 0;
          text-indent: -20000px;
          margin-left: 10px;
          position: relative;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          &:first-of-type {
            margin-left: 0;
          }
          &:before {
            content: "";
            display: block;
            width: 36px;
            height: 36px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -18px 0 0 -18px;
          }
        }
        .btn-home:before {
          background: url(../img/home_white.svg) 0 0 no-repeat;
          background-size: 36px auto;
        }
        .btn-play:before {
          background: url(../img/play_arrow_white.svg) 0 0 no-repeat;
          background-size: 36px auto;
        }
      }
    }
    .item {
      position: absolute;
      display: block;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      &.item-1 {
        left: 40%;
        right: -250px;
        width: 1210px;
        transform: translateX(50%);
        &.on {
          opacity: 1;
          transform: translateX(0%);
        }
      }
      &.item-2 {
        left: 40%;
        right: -250px;
        width: 1210px;
        &.on {
          opacity: 1;
        }
      }
      &.item-31,
      &.item-32 {
        left: 40%;
        right: -70px;
        width: 1030px;
      }
      &.item-31 {
        transform: translate(10%, -50%);
        bottom: 3%;
        &.on {
          transform: translate(0);
          opacity: 1;
        }
      }
      &.item-32 {
        transform: translateY(50%);
        bottom: 0;
        &.on {
          transform: translate(0);
          opacity: 1;
        }
      }
      &.item-4 {
        left: 50%;
        top: 0;
        right: 0;
        transform: translate(0, -100%);
        width: 618px;
        &.on {
          opacity: 1;
          transform: translate(0, 0);
          transition-delay: 0.5s;
        }
      }
    }
  }
  .m-banner-btn {
    position: absolute;
    top: 50%;
    margin-top: -32px;
    display: block;
    width: 86px;
    height: 86px;
    text-indent: -20000px;
    font-size: 0;
    transition: background-color 0.3s;
  
    z-index: 1000;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    &.prev,
    &.next {
      &:before {
        content: "";
        display: block;
        width: 36px;
        height: 36px;
        left: 50%;
        top: 50%;
        margin: -18px 0 0 -18px;
        position: absolute;
      }
    }
    &.prev {
      left: 50%;
      margin-left: -695px;
      &:before {
        background: url(../img/arrow_back_ios_white.svg) 0 0 no-repeat;
        background-size: 36px auto;
      }
    }
    &.next {
      right: 50%;
      margin-right: -695px;
      &:before {
        background: url(../img/arrow_forward_ios_white.svg) 0 0 no-repeat;
        background-size: 36px auto;
      }
    }
  }
  
  
  &.on-1 {
    .mv-con {
      .intro:before {
        background-color: ${MajorColor1};
      }
      .btn-group a {
        background-color: ${MajorColor1};
      }
    }
    .m-banner-btn {
      background-color: ${MajorColor1};
    }
  
    
  }
  &.on-2 {
    .mv-con {
      .intro:before {
        background-color: ${MajorColor2};
      }
      .btn-group a {
        background-color: ${MajorColor2};
      }
    }
    .m-banner-btn {
      background-color: ${MajorColor2};
    }
  }
  &.on-3 {
    .mv-con {
      .intro:before {
        background-color: ${MajorColor3};
      }
      .btn-group a {
        background-color: ${MajorColor3};
      }
    }
    .m-banner-btn {
      background-color: ${MajorColor3};
    }
  }
  &.on-4 {
    .mv-con {
      .intro:before {
        background-color: ${MajorColor4};
      }
      .btn-group a {
        background-color: ${MajorColor4};
      }
    }
    .m-banner-btn {
      background-color: ${MajorColor4};
    }
  }
}
`;

export const SliderPager = styled.div`
  ul.on-1 {
    li.slick-active button {
      background-color: ${MajorColor1};
    }
  }
  ul.on-2 {
    li.slick-active button {
      background-color: ${MajorColor2};
    }
  }
  ul.on-3 {
    li.slick-active button {
      background-color: ${MajorColor3};
    }
  }
  ul.on-4 {
    li.slick-active button {
      background-color: ${MajorColor4};
    }
  }
  position: absolute;
  left: 0;
  bottom: 70px;
  width: 100%;
  z-index: 1000;
  font-size: 0;
  li {
    width: auto;
    height: auto;
    margin: 0 5px;
    &.slick-active {
      button {
        width: 38px;
        transition: background-color 0.3s;
      }
    }
    button {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
      transition: background-color 0.3s, width 0.3s;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
      &:before {
        display: none;
      }
    }
  }
`;
