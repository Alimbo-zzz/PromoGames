import React from "react";
import { StyledContacts } from "@/styles/components/StyledContacts";
import { StyledH2Left, StyledP500 } from "@/styles/components/StyledTypography";
import letter from "@@/images/letterImage.svg";
import telegram from "@@/icons/purpleTelegramIcon.svg";
import mail from "@@/icons/purpleMailIcon.svg";
import { CopyEmailToClipboard } from "@/scripts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Lottie from "lottie-react";
import green_left from "@@/animation/green_left.json";
import { useInView } from "react-intersection-observer";

const Contacts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });
  return (
    <StyledContacts id="contacts">
      <div className="image_block" ref={ref}>
        {inView ? (
          <Lottie className="lottie" animationData={green_left} loop={false} />
        ) : null}
        <AnimationOnScroll
          animateIn="animate__zoomIn"
          duration="1"
          delay="200"
          animateOnce="true"
          className="letter_wrapper"
        >
          <LazyLoadImage src={letter} alt="letter" />
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        className="contacts"
        animateIn="animate__fadeInUp"
        duration="1"
        delay="400"
        animateOnce="true"
      >
        <StyledH2Left>Контакты</StyledH2Left>
        <StyledP500>HedgehogGames@.com</StyledP500>
        <a
          className="link"
          target="_blank"
          href="https://msngr.link/tg/hdghggame"
          rel="noopener noreferrer"
        >
          <img className="icon" src={telegram} alt="telegram" />
        </a>
        <label className="tooltip">
          <img
            className="icon"
            src={mail}
            alt="mail"
            onClick={CopyEmailToClipboard}
          />
          <input type="checkbox" />
          <span>Почта скопирована.</span>
        </label>
      </AnimationOnScroll>
    </StyledContacts>
  );
};

export default Contacts;
