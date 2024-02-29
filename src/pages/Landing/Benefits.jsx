import React from "react";
import { StyledBenefits } from "@/styles/components/StyledBenefits";
import { StyledH3, StyledH4, StyledP } from "@/styles/components/StyledTypography";
import benefits from "@@/images/woman with a laptop.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Benefits = () => {
  return (
    <StyledBenefits>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        duration="2"
        delay="100"
        animateOnce="true"
      >
        <StyledH3>Преимущества промо-игр</StyledH3>
      </AnimationOnScroll>
      <div className="benefits">
        <AnimationOnScroll
          className="blur"
          animateIn="animate__zoomIn"
          duration="2"
          delay="100"
          animateOnce="true"
        ></AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration="1"
          delay="100"
          className="green_circle"
          animateOnce="true"
        ></AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="1"
          delay="100"
          animateOnce="true"
        >
          <LazyLoadImage
            className="lady_image"
            src={benefits}
            alt="a girl with a laptop"
          />
        </AnimationOnScroll>
        <ul className="benefits_list">
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration="1"
            delay="100"
            animateOnce="true"
          >
            <li>
              <span>&rarr;</span>
              <StyledH4>Короткий срок разработки</StyledH4>
              <StyledP>
                Готовые игровые решения, которые можно использовать уже сегодня
              </StyledP>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration="1"
            delay="100"
            animateOnce="true"
          >
            <li>
              <span>&rarr;</span>
              <StyledH4>Гибкие настройки</StyledH4>
              <StyledP>
                Возможность полной замены графики, наполнения и логики игры
              </StyledP>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration="1"
            delay="100"
            animateOnce="true"
          >
            <li>
              <span>&rarr;</span>
              <StyledH4>Мобильность</StyledH4>
              <StyledP>
                Созданные игры открываются во всех популярных веб имобильных
                браузерах
              </StyledP>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration="1"
            delay="100"
            animateOnce="true"
          >
            <li>
              <span>&rarr;</span>
              <StyledH4>Бесплатная поддержка</StyledH4>
              <StyledP>
                В течение 1 месяца предоставляется полная техническия поддержка
              </StyledP>
            </li>
          </AnimationOnScroll>
        </ul>
      </div>
    </StyledBenefits>
  );
};

export default Benefits;
