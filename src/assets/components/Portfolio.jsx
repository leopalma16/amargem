import Img01 from "./../links/portfolio/portfolio-1.jpg";
import Img02 from "./../links/portfolio/portfolio-2.jpg";
import Img03 from "./../links/portfolio/portfolio-3.jpg";
import Img04 from "./../links/portfolio/portfolio-4.jpg";
import Img05 from "./../links/portfolio/portfolio-5.jpg";
import Img06 from "./../links/portfolio/portfolio-6.jpg";
import Img07 from "./../links/portfolio/portfolio-7.jpg";
import Img08 from "./../links/portfolio/portfolio-8.jpg";
import Img09 from "./../links/portfolio/portfolio-9.jpg";
import Card from "./Card";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio_container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Um olhar panorâmico</p>
        </div>
        <div className="pictures">
          <Card imgRef={Img01} />
          <Card imgRef={Img02} />
          <Card imgRef={Img03} />
          <Card imgRef={Img04} />
          <Card imgRef={Img05} />
          <Card imgRef={Img06} />
          <Card imgRef={Img07} />
          <Card imgRef={Img08} />
          <Card imgRef={Img09} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
