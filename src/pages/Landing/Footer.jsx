import React, {useEffect, useContext} from "react";
import { StyledFooter } from "@/styles/components/StyledFooter";
import logo from "@@/icons/logo.svg";

const Footer = () => {



  return (
    <StyledFooter>
      <div className="footer_wrapper">
        <div className="postal_address">
          <p>
            Postal address: Russian Federation. St. Petersburg. Ligovsky
            prospect 50. Postal Code: 190000 STO: Oleg Serdiuk
            oleg-s32@yandex.ru
          </p>
        </div>
        <div className="layout_block">
          <ul className="nav_menu">
            <li>
              <a href="#about_games">Об играх</a>
            </li>
            <li>
              <a href="#catalog">Каталог игр</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
          <div className="rights">
            <p>© 2022. Hedgehog Games. Все права защищены</p>
            <p className="small_text">Illustrator by icon8.com</p>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
