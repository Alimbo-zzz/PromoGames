import React, { useState } from "react";
import General from "./General";
import AboutGames from "./AboutGames";
import WhyNeedGames from "./WhyNeedGames";
import Benefits from "./Benefits";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
import Footer from "./Footer";
import { StyledLanding } from "@/styles/components/StyledLanding";
import OnOutsideClick from "react-outclick";
import Header from "./Header";
import ScrollSpy from "react-ui-scrollspy";
import Cursor from "./components/Cursor";

const Landing = () => {
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <>
      <StyledLanding>
        <OnOutsideClick
          onOutsideClick={() => {
            setMenuMobileActive(false);
            setBurgerActive(false);
          }}
        >
          <Header
            menuMobileActive={menuMobileActive}
            setMenuMobileActive={setMenuMobileActive}
            burgerActive={burgerActive}
            setBurgerActive={setBurgerActive}
          />
        </OnOutsideClick>
        <div className="cursor">
          <ScrollSpy
            offsetTop={0}
            offsetBottom={0}
            activeClass="active-scroll-spy"
            scrollThrottle={100}
          >
            <General />
            <AboutGames />
            <WhyNeedGames />
            <Benefits />
            <Catalog />
            <Contacts />
            <Footer />
            <Cursor color={"rgba(172, 40, 253, 1)"} radius={200} />
          </ScrollSpy>
        </div>
      </StyledLanding>
    </>
  );
};

export default Landing;
