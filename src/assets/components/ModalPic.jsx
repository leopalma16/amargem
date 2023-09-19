import { useEffect, useState } from "react";
import EmblaCarousel from "./../embla/js/EmblaCarousel";
import "./../embla/css/sandbox.css";
import "./../embla/css/embla.css";

const ModalPic = ({ data, changePic, indexImg, closeModal }) => {
  useEffect(() => {
    let el = document.getElementById("modalworks");
    if (indexImg >= 0 && indexImg < data.length) {
      el.classList.add("modal_close_opened");
    } else {
      el.classList.remove("modal_close_opened");
    }
  }, [indexImg]);

  const images = data.map((image) => image.data.images);

  const imageByIndex = (index) => images[index % images.length];

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = data.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="modal_works" id="modalworks">
      <div className="modal_works_overlay">
        <div className="modal_red_close" onClick={closeModal}></div>
        <div className="modal_works_close_btn" onClick={closeModal}>
          <span>Close </span>
          <i className="bi bi-x-lg"></i>
        </div>
        <main className="sandbox">
          <section className="sandbox__carousel">
            <EmblaCarousel
              slides={SLIDES}
              options={OPTIONS}
              imageByIndex={imageByIndex}
              indexImg={indexImg}
              closeModal={closeModal}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default ModalPic;
