import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Categorias() {
  return (
    <div className="campo mx-4">
      <div className="div3 w-80">
        <div className="row mb-4 w-60">
          <div className="col-sm-6"><h2>Categorias</h2></div>
          <div className="col-sm-6"><button className="btn btn-primary float-end2">Adicionar Categoria +</button></div>
        </div>
        <h5>Histórico de Categorias</h5>
        <table className="table w-60 shadow1 mt-4">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Categoria</th>
              <th scope="col">Preço</th>
              <th scope="col">Modificar</th>
              <th scope="col">Deletar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="v-a"> 1 </th>
              <td className="v-a fw-bolder">Emprestimo</td>
              <td className="v-a text-danger fw-medium">Despesa</td>
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
              <td className="v-a fw-bolder">Salário</td>
              <td className="v-a text-success fw-medium">Receita</td>
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

export default Categorias;
