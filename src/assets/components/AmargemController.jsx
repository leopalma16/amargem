import { useState, useEffect } from "react";
import { db } from "./../../firebase";
import { useNavigate } from "react-router-dom";

const AmargemController = ({ pecaName }) => {
  const [pecas, setPecas] = useState([]);
  const navigate = useNavigate();

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
  }, []);

  const indexPeca = pecas.findIndex((peca) => peca.data.nome === pecaName);

  const nextPeca = pecas.filter((peca, index) => index === indexPeca + 1);
  const prevPeca = pecas.filter((peca, index) => index === indexPeca - 1);
  const nextPecaName =
    pecas.length > 0 && indexPeca + 1 < pecas.length
      ? nextPeca[0].data.nome
      : "";
  const prevPecaName =
    pecas.length > 0 && indexPeca > 0 ? prevPeca[0].data.nome : "";

  console.log(prevPecaName);

  return (
    <div className="amargem_single_controller">
      {prevPecaName !== "" ? (
        <button onClick={() => navigate("/" + prevPecaName)}>
          <i className="bi bi-caret-left"></i> Anterior
        </button>
      ) : (
        <></>
      )}
      {nextPecaName !== "" ? (
        <button onClick={() => navigate("/" + nextPecaName)}>
          Próxima <i className="bi bi-caret-right"></i>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AmargemController;
