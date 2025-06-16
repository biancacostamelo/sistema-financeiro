import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Tablesaidas = () => {
  const [saidas, setSaidas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/todassaidas")
      .then((resposta) => {
        setSaidas(resposta.data);
      })
      .catch(() => {
        alert("erro ao buscar dados");
      });
  }, []);

  const [startData, setStartData] = useState("");
  const [endData, setEndData] = useState("");
  const params = { startData, endData };
  const Filtrar = () => {
    if (startData === "" || endData === "") {
      alert("Preencha os campos de data");
      return;
    }
    axios
      .get("http://localhost:3005/filtrodespesas", { params })
      .then((resposta) => {
        setSaidas(resposta.data);
      })
      .catch(() => {
        alert("erro ao buscar dados");
      });
  };

  return (
    <>
      <div className="campo overflow mx-52">
        <div className="div3">
          <h2>Tabela de Saídas</h2>
        </div>
        <div className="div3 filtroDashboard">
          <div>
            <label>Data Início</label>
            <input
              type="date"
              value={startData}
              onChange={(e) => setStartData(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label>Data Fim</label>
            <input
              type="date"
              value={endData}
              onChange={(e) => setEndData(e.target.value)}
              className="form-control"
            />
          </div>
          <button onClick={Filtrar} className="btn mt-4" style={{ backgroundColor: '#003366', color: '#fff' }}>Filtrar</button>
        </div >
        <div className="div2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Categoria</th>
                <th scope="col">Preço</th>
                <th scope="col">Data</th>
                <th scope="col">Descrição</th>
                <th scope="col">Modificar</th>
                <th scope="col">Deletar</th>
              </tr>
            </thead>
            <tbody>
              {saidas.map((saidas) => (
                <tr key={saidas.id}>
                  <th scope="row" className="v-a">
                    {saidas.id}
                  </th>
                  <td className="v-a fw-bolder">{saidas.categoria}</td>
                  <td className="v-a text-danger fw-medium">
                    R$ {saidas.preco}
                  </td>
                  <td className="v-a">
                    {new Date(saidas.dataSaidas).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="v-a">
                    <div
                      style={{
                        maxWidth: "220px",
                        whiteSpace: "nowrap",
                        overflowX: "auto",
                        textOverflow: "ellipsis",
                        display: "block",
                      }}
                    >
                      {saidas.descricao}
                    </div>
                  </td>
                  <td className="v-a">
                    <Link
                      to={`/updateentrada/${saidas.id}`}
                      className="mb-2 mt-2 align-middle"
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{ color: "#204A77", height: "18px" }}
                      />
                    </Link>
                  </td>
                  <td className="v-a">
                    <button
                      onClick={(e) => Handledelete(saidas.id)}
                      className="btn mb-2 mt-2 align-middle"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{ color: "#E9332E", height: "18px" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  function Handledelete(id) {
    const confirma = window.confirm("Deseja apagar o dado?");
    if (confirma) {
      axios.delete("http://localhost:3005/todassaidas/" + id).then((res) => {
        alert("dado apagado com sucesso!");
        window.location.reload();
      });
    }
  }
};

export default Tablesaidas;
