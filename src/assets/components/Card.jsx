const Card = ({ imgRef }) => {
  return (
    <div className="card">
      <div className="card_overlay">
        <div className="card_info">
          <h3>O Dilema do Médico</h3>
          <i className="bi bi-fan"></i>
        </div>
      </div>
      <img src={imgRef} alt="" />
    </div>
  );
};

export default Card;

//gfsdgds
