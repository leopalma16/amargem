import { Link } from "react-router-dom";

const Card = ({ imgRef }) => {
  return (
    <div className="card">
      <div className="card_overlay">
        <div className="card_info">
          <h3>O Dilema do Médico</h3>
          <Link to="/fdsfsd">
            <i className="bi bi-fan"></i>
          </Link>
        </div>
      </div>
      <img src={imgRef} alt="" />
    </div>
  );
};

export default Card;

//gfsdgds
