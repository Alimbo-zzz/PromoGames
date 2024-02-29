import React, { useEffect, useState } from "react";
import ScrollUp from "./components/ScrollUp";
import { StyledHeader } from "@/styles/components/StyledHeader";
import logo from "/icons/logo.svg";
import telegram from "/icons/telegramIcon.svg";
import mail from "/icons/mailIcon.svg";
import { CopyEmailToClipboard } from "@/scripts";

const Header = ({
  menuMobileActive,
  setMenuMobileActive,
  burgerActive,
  setBurgerActive,
}) => {
  const [headerFix, setHeaderFix] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const showHeader = () => {
    if (window.pageYOffset > 300) {
      setHeaderFix(true);
    } else {
      setHeaderFix(false);
    }
  };

  const handleMobileMenu = () => {
    setBurgerActive(!burgerActive);
    setMenuMobileActive(!menuMobileActive);
  };
  useEffect(() => {
    document.addEventListener("scroll", showHeader);
  }, []);
  return (
    <StyledHeader>
      <div className="header" data-fix={headerFix}>
        <img className="logo" src={logo} alt="logo" />
        <div
          className={
            menuMobileActive ? "header_nav_block active" : "header_nav_block"
          }
        >
          <nav data-opacity={opacity} className="nav">
            <ul>
              <li onClick={handleMobileMenu} data-to-scrollspy-id="about_games">
                <a href="#about_games">Об играх</a>
              </li>
              <li onClick={handleMobileMenu} data-to-scrollspy-id="catalog">
                <a href="#catalog">Каталог игр</a>
              </li>
              <li onClick={handleMobileMenu} data-to-scrollspy-id="contacts">
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
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
        <div
          className={burgerActive ? "burger-btn active" : "burger-btn"}
          onClick={handleMobileMenu}
        >
          <span></span>
        </div>
      </div>
      <ScrollUp />
    </StyledHeader>
  );
};

export default Header;
