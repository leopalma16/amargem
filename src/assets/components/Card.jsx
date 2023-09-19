import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const { imgRef, link } = props;

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/" + link)}>
      <div className="card_overlay">
        <div className="card_info">
          <h3>{link}</h3>
          <Link to={"/" + link}>
            <i className="bi bi-fan"></i>
          </Link>
        </div>
      </div>
      <img src={imgRef} alt="" />
    </div>
  );
};

export default Card;
