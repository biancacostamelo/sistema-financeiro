import React from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Contas() {
  return (
    <div className="campo mx-5">
      <div className="div3 w-80">
        <div className="d-flex justify-content-between mb-4">
          <h2>Contas</h2>
          <button className="btn btn-primary">Adicionar Conta +</button>
        </div>
        <h5>Histórico de Contas</h5>
        <table className="table w-50 shadow1 mt-4">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Conta</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
              <th scope="col">Modificar</th>
              <th scope="col">Deletar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="v-a"> 1 </th>
              <td className="v-a fw-bolder">Itaú</td>
              <td className="v-a fw-medium">Conta Corrente</td>
              <td className="v-a fw-medium">R$ 500,00</td>
              <td className="v-a">
                <Link to={`/`} className="mb-2 mt-2 align-middle">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ color: "#204A77", height: "18px" }}
                  />
                </Link>
              </td>
              <td className="v-a">
                <button className="btn mb-2 mt-2 align-middle">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#E9332E", height: "18px" }}
                  />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row" className="v-a"> 2 </th>
              <td className="v-a fw-bolder">Nubank</td>
              <td className="v-a fw-medium">Caixinha</td>
              <td className="v-a fw-medium">R$ 1500,00</td>
              <td className="v-a">
                <Link to={`/`} className="mb-2 mt-2 align-middle">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ color: "#204A77", height: "18px" }}
                  />
                </Link>
              </td>
              <td className="v-a">
                <button className="btn mb-2 mt-2 align-middle">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#E9332E", height: "18px" }}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contas;
