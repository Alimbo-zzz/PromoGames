import React from "react";
import { StyledWhyNeedGames } from "@/styles/components/StyledWhyNeedGames";
import { StyledH3, StyledH4, StyledP } from "@/styles/components/StyledTypography";
import rocket from "@@/icons/rocketIcon.svg";
import megafon from "@@/icons/megaphoneIcon.svg";
import hand from "@@/icons/hand-holding-heart 1.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const WhyNeedGames = () => {
  return (
    <StyledWhyNeedGames>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        duration="2"
        delay="100"
        animateOnce="true"
      >
        <StyledH3>Зачем вам игра</StyledH3>
      </AnimationOnScroll>
      <div className="reasons">
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="2"
          delay="400"
          animateOnce="true"
        >
          <div className="reasons_block">
            <img src={rocket} alt="rocket" />
            <StyledH4>Результативность</StyledH4>
            <StyledP>
              Конверсия в регистрацию приинтерактиве на порядок выше
              традиционных инструментов сбора данных потенциальных клиентов
            </StyledP>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="2"
          delay="400"
          animateOnce="true"
        >
          <div className="reasons_block">
            <img src={megafon} alt="megaphone" />
            <StyledH4>Уникальная рекламная кампания</StyledH4>
            <StyledP>
              Какие призы и бонусы получат победители, как смогут их потратить –
              решаете вы!
            </StyledP>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="2"
          delay="400"
          animateOnce="true"
        >
          <div className="reasons_block">
            <img src={hand} alt="hand holding a heart" />
            <StyledH4>Экономия ресурсов</StyledH4>
            <StyledP>
              Не нужно ничего разрабатывать с нуля, используйте готовые решения,
              которые сэкономят вам деньги и время
            </StyledP>
          </div>
        </AnimationOnScroll>
      </div>
    </StyledWhyNeedGames>
  );
};

export default WhyNeedGames;
