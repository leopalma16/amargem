import Card from "./Card";
import { animateScroll as scroll } from "react-scroll";

//Firebase imports
import { db } from "./../../firebase";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    db.collection("amargem")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (snapshot) {
        setPecas(
          snapshot.docs.map(function (document) {
            return { id: document.id, data: document.data() };
          })
        );
      });
    scroll.scrollToTop();
  }, []);

  console.log(pecas);

  return (
    <section className="portfolio">
      <div className="portfolio_container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Um olhar panorâmico</p>
        </div>
        <div className="pictures">
          {pecas.map((val) => {
            return (
              <Card key={val.id} imgRef={val.data.url} link={val.data.nome} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
