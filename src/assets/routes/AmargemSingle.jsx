import { Link } from "react-router-dom";
import ImgTop from "./../links/portfolio/portfolio-3.jpg";
import TestemonialCard from "../components/TestemonialCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

///images
import Img01 from "./../links/portfolio/portfolio-1.jpg";
import Img02 from "./../links/portfolio/portfolio-2.jpg";
import Img03 from "./../links/portfolio/portfolio-3.jpg";
import Img04 from "./../links/portfolio/portfolio-4.jpg";
import Img05 from "./../links/portfolio/portfolio-5.jpg";
import Img06 from "./../links/portfolio/portfolio-6.jpg";
import Img07 from "./../links/portfolio/portfolio-7.jpg";
import Img08 from "./../links/portfolio/portfolio-8.jpg";
import Img09 from "./../links/portfolio/portfolio-9.jpg";
import ModalPic from "../components/ModalPic";

const AmargemSingle = () => {
  const { id } = useParams();
  const [indexImg, setIndexImg] = useState();

  const openModal = (e, par) => {
    e.preventDefault();
    setIndexImg(par);
  };

  const changePic = (par) => {
    setIndexImg(par);
  };
  return (
    <section className="amargem_single">
      <ModalPic
        //data={imageList}
        indexImg={indexImg}
        closeModal={() => setIndexImg()}
        changePic={changePic}
      />
      <div className="single_top">
        <h1>Universo</h1>
        <div className="breadcrumbs">
          <p>
            <Link to="/">Home</Link> / Universo
          </p>
        </div>
        <img src={ImgTop} alt="" />
      </div>
      <div className="testimonials">
        <TestemonialCard />
        <TestemonialCard />
        <TestemonialCard />
      </div>
      <div className="single_portfolio">
        <div
          className="single_portfolio_image"
          onClick={(e) => openModal(e, 5)}
        >
          <img src={Img01} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img02} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img03} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img04} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img05} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img06} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img07} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img08} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img09} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img01} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img02} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img03} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img04} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img05} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img06} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img07} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img08} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img09} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img01} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img02} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img03} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img04} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img05} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img06} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img07} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img08} alt="" />
        </div>
        <div className="single_portfolio_image">
          <img src={Img09} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AmargemSingle;
