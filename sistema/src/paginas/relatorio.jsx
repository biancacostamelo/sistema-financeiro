import React from "react";
import Pesquisa from "../components/pesquisa";

const Relatorio = () => {
    return (
        <div className="campo">
            <Pesquisa/>

            <div className="div2">
                <table className="table">
                    <thead>
                        <tr>
                            <th  className="p-2">Categoria</th>
                            <th  className="p-2">Preço</th>
                            <th  className="p-2">Data</th>
                            <th  className="p-2">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  className="p-2">Bianca</td>
                            <td  className="p-2">19</td>
                            <td  className="p-2">Brasil</td>
                            <td  className="p-2">Brasil</td>
                        </tr>
                        <tr>
                            <td  className="p-2">Lucas</td>
                            <td  className="p-2">25</td>
                            <td  className="p-2">Portugal</td>
                            <td  className="p-2">Brasil</td>
                        </tr>
                        <tr>
                            <td  className="p-2">Ana</td>
                            <td  className="p-2">30</td>
                            <td  className="p-2">Canadá</td>
                            <td  className="p-2">Brasil</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Relatorio