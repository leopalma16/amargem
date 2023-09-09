import { useEffect, useState } from "react";

const ModalPic = ({ data, changePic, indexImg, closeModal }) => {
  useEffect(() => {
    let el = document.getElementById("modalworks");
    if (indexImg >= 0 /*&& indexImg < data.length*/) {
      el.classList.add("modal_close_opened");
    } else {
      el.classList.remove("modal_close_opened");
    }
  }, [indexImg]);

  return (
    <div className="modal_works" id="modalworks">
      <div className="modal_works_overlay">
        <div className="modal_red_close" onClick={closeModal}></div>
        <div className="modal_works_close_btn" onClick={closeModal}>
          <span>Close </span>
          <i className="bi bi-x-lg"></i>
        </div>
        <main className="sandbox">
          <section className="sandbox__carousel"></section>
        </main>
      </div>
    </div>
  );
};

export default ModalPic;
