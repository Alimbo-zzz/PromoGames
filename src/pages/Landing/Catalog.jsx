import React from "react";
import { StyledCatalog } from "@/styles/components/StyledCatalog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameItem from "./components/GameItem";
import games from "@@/data/games";
import { StyledH2 } from "@/styles/components/StyledTypography";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Catalog = () => {
  function SampleNextArrow(props) {
    const { onClick, className } = props;
    return (
      <button onClick={onClick} className={className} style={{overflow: 'hidden'}}>
        <svg
          className="button-next"
          width="68"
          height="26"
          viewBox="0 0 68 26"
          transform="translate(10px 20px)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.1519 25.8401C47.7919 24.1761 48.4959 22.6401 49.2639 21.2321C50.0319 19.7601 50.8959 18.3841 51.8559 17.1041H0.399902V9.2321H51.8559C50.9599 7.9521 50.1279 6.6081 49.3599 5.2001C48.5919 3.7281 47.8879 2.1601 47.2479 0.496094H54.5439C58.5119 5.16809 62.8639 8.7201 67.5999 11.1521V15.2801C62.8639 17.5841 58.5119 21.1041 54.5439 25.8401H47.1519Z"
            fill="white"
          />
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick, className } = props;
    return (
      <button className={className} onClick={onClick} style={{overflow: 'hidden'}}>
        <svg
          className="button-prev"
          width="68"
          height="26"
          viewBox="0 0 68 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8481 25.8401C20.2081 24.1761 19.5041 22.6401 18.7361 21.2321C17.9681 19.7601 17.1041 18.3841 16.1441 17.1041H67.6001V9.2321H16.1441C17.0401 7.9521 17.8721 6.6081 18.6401 5.2001C19.4081 3.7281 20.1121 2.1601 20.7521 0.496094H13.4561C9.48809 5.16809 5.13609 8.7201 0.400093 11.1521V15.2801C5.13609 17.5841 9.48809 21.1041 13.4561 25.8401H20.8481Z"
            fill="white"
          />
        </svg>
      </button>
    );
  }
  const pagination = ["Квиз", "Найди пару", "Платформер", "Тапалка"];
  const settings = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customPaging: function (i) {
            return <a>{pagination[i]}</a>;
          },
          dotsClass: "slick-dots",
          infinite: false,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <StyledCatalog id="catalog">
      <AnimationOnScroll
        className="arrow"
        animateIn="animate__fadeInUp"
        duration="2"
        delay="100"
        animateOnce="true"
      >
        <StyledH2>Каталог игр</StyledH2>
      </AnimationOnScroll>
      <AnimationOnScroll
        className="blur"
        animateIn="animate__zoomIn"
        duration="1"
        delay="100"
        animateOnce="true"
      ></AnimationOnScroll>
      <AnimationOnScroll
        className="catalog"
        animateIn="animate__zoomIn"
        duration="1"
        delay="100"
        animateOnce="true"
      >
        <Slider {...settings}>
          {games.map((item, id) => {
            return <GameItem item={item} key={id} games={games} />;
          })}
        </Slider>
      </AnimationOnScroll>
    </StyledCatalog>
  );
};

export default Catalog;
