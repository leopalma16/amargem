import Person1 from "./../links/people/simone-carleto.jpg";

import { useEffect, useState } from "react";
import { db } from "./../../firebase";

const TestemonialCard = ({ uid }) => {
  const [testemonials, setTestemonials] = useState([]);
  useEffect(() => {
    db.collection("amargem")
      .doc(uid)
      .collection("testemonials")
      .onSnapshot(function (snapshot) {
        setTestemonials(
          snapshot.docs.map(function (document) {
            return { id: document.id, data: document.data() };
          })
        );
      });
  }, []);

  return (
    <>
      {testemonials.map((val) => {
        return (
          <div className="testimonial_card" key={val.id}>
            <div className="testimonial_author">
              <div className="testemonial_single_img">
                <img alt="" src={val.data.autorImage} />
              </div>
              <h6>
                {val.data.autor.toUpperCase()}
                <span>{val.data.cargo}</span>
              </h6>
            </div>
            <h4>{val.data.titulo}</h4>
            <p>
              <span>“</span>
              {val.data.text}
              <span>”</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TestemonialCard;
