import { Link } from "react-router-dom";
import LogoHz from "./../links/LogoAmargemHz";
import { useState, useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import { callOnWhats } from "../functions/Functions";

const Header = () => {
  const [position, setPosition] = useState(1);
  const atualPosicao = window.scrollY;

  onscroll = () => {
    setPosition(atualPosicao);
  };

  useEffect(() => {
    //console.log(position);
    let elNav = document.getElementById("navbar");

    if (position > 15) {
      elNav.classList.add("navbar_black");
    } else {
      elNav.classList.remove("navbar_black");
    }
  }, [position]);

  const openNav = () => {
    let navOpt = document.getElementById("navOpt");
    navOpt.classList.toggle("navOpened");
  };

  const removeNav = () => {
    let navOpt = document.getElementById("navOpt");
    navOpt.classList.remove("navOpened");
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    removeNav();
    let returnInit = () => setPosition(1);
    setTimeout(returnInit, 1000);
  };

  const scrollTo = (par) => {
    scroller.scrollTo(par, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -60, // Scrolls to element + 50 pixels down the page
    });
    removeNav();
    setPosition(300);
  };
  return (
    <div className="navbar" id="navbar">
      <div className="logo">
        <Link to="/">
          <LogoHz />
        </Link>
      </div>
      <div className="navMobile" onClick={openNav}>
        <i className="bi bi-list"></i>
      </div>
      <nav id="navOpt">
        <a onClick={scrollToTop}>Topo</a>
        <a onClick={() => scrollTo("about")}>Sobre</a>
        <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
        <a onClick={() => scrollTo("contact")}>Contato</a>
        <a onClick={callOnWhats}>Whatsapp</a>
      </nav>
    </div>
  );
};

export default Header;
