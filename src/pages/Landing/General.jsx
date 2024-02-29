import React, { useState } from "react";
import { StyledGeneral } from "@/styles/components/StyledGeneral";
import girl from "@@/images/girlWidthDog.svg";
import Button from "./components/Button";
import Lottie from "lottie-react";
import green1 from "@@/animation/big_green_delay1.json";
import purple from "@@/animation/small_purple.json";
import mouse from "@@/animation/mouse.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import OnOutsideClick from "react-outclick";
import Header from "./Header";

const General = () => {
  return (
    <StyledGeneral id="about_games_spy">
      <div className="content">
        <div className="promo_pic">
          <AnimationOnScroll
            className="green_blur"
            animateIn="animate__zoomIn"
            duration="1"
            delay="100"
            animateOnce="true"
          ></AnimationOnScroll>
          <Lottie className="lottie" animationData={green1} loop={false} />
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            duration="1"
            delay="0"
            animateOnce="true"
          >
            <img className="girl_pic" src={girl} alt="girl with dog" />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          className="promo"
          animateIn="animate__fadeInUp"
          duration="1"
          delay="400"
          animateOnce="true"
        >
          <h1>Промо-игры на заказ</h1>
          <p>
            Готовое решение за <span className="underline">1 день</span>
            <Lottie
              className="lottie_purple"
              animationData={purple}
              loop={false}
            />
          </p>
          <Button text="Посмотреть каталог" href={"#catalog"} />
        </AnimationOnScroll>
        <div className="mouse">
          <Lottie animationData={mouse} loop={true} />
        </div>
      </div>
    </StyledGeneral>
  );
};

export default General;
