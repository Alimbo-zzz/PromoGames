import React from "react";
import { StyledAboutGames } from "@/styles/components/StyledAboutGames";
import { StyledH2, StyledP500 } from "@/styles/components/StyledTypography";
import controller from "@@/images/controllerImage.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import green_right from "@@/animation/green_right.json";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

const AboutGames = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <StyledAboutGames id="about_games">
      <AnimationOnScroll
        className="about_block"
        animateIn="animate__fadeInUp"
        duration="2"
        delay="0"
        animateOnce="true"
      >
        <StyledH2>Об играх</StyledH2>
        <StyledP500>
          <span>Hedgehog Games</span> позволяет брендам геймифицировать
          маркетинговую активность и обучение за счет запуска игровых проектов
          набазе готовых решений и интеграции всуществующие игры
        </StyledP500>
      </AnimationOnScroll>
      <div className="image_block" ref={ref}>
        {inView ? (
          <Lottie className="lottie" animationData={green_right} loop={false} />
        ) : null}
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="1"
          delay="200"
          animateOnce="true"
        >
          <LazyLoadImage src={controller} alt="controller" />
        </AnimationOnScroll>
      </div>
    </StyledAboutGames>
  );
};

export default AboutGames;
