import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import TestemonialCard from "../components/TestemonialCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Firebase imports
import { db } from "./../../firebase";

import ModalPic from "../components/ModalPic";
import AmargemController from "../components/AmargemController";

const AmargemSingle = () => {
  const { id } = useParams();
  const [peca, setPeca] = useState([]);
  const [indexImg, setIndexImg] = useState();
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    db.collection("amargem")
      .where("nome", "==", id)
      .onSnapshot(function (snapshot) {
        setPeca(
          snapshot.docs.map(function (document) {
            return { id: document.id, data: document.data() };
          })
        );
      });

    scroll.scrollToTop();

    function primeiraFuncao() {
      console.log("Esperou isso");
    }
    async function segundaFuncao() {
      console.log("Iniciou");
      await primeiraFuncao();

      console.log("Agora executou isso!");
    }
    segundaFuncao();
  }, [id]);

  useEffect(() => {
    if (peca.length > 0) {
      db.collection("amargem")
        .doc(peca[0].id)
        .collection("images")
        .orderBy("images")
        .onSnapshot(function (snapshot) {
          setImageList(
            snapshot.docs.map(function (document) {
              return { id: document.id, data: document.data() };
            })
          );
        });
    }
  }, [peca]);

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
        data={imageList}
        indexImg={indexImg}
        closeModal={() => setIndexImg()}
        changePic={changePic}
      />
      <div className="single_top">
        <h1>{peca.length > 0 ? peca[0].data.nome : ""}</h1>
        <div className="breadcrumbs">
          <p>
            <Link to="/">Home</Link> /{" "}
            {peca.length > 0 ? peca[0].data.nome : ""}
          </p>
        </div>
        <AmargemController
          pecaName={peca.length > 0 ? peca[0].data.nome : ""}
        />
        <img src={peca.length > 0 ? peca[0].data.url : ""} alt="" />
      </div>
      <div className="testimonials about">
        {peca.map((val) => {
          return <TestemonialCard key={val.id} uid={val.id} />;
        })}
      </div>
      <div className="single_portfolio portfolio">
        {imageList.map((val, index) => {
          return (
            <div
              key={val.id}
              className="single_portfolio_image"
              onClick={(e) => openModal(e, index)}
            >
              <img src={val.data.images} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmargemSingle;
