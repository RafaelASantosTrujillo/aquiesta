import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

let calificados = [
    {
        negocio: "Quesadillas Juanita",
        phone: "755631589",
        desc:
            "Vendemos quesadillas, pambazos, tacos, sopes, tostadas y mucho mas",
        calif: 4,
    },
    {
        negocio: "Taqueria Los Hermanos",
        phone: "332642558",
        desc: "Tus tacos favoritos desde 1976 con la mejor calidad",
        calif: 5
    }, {
        negocio: "Lavanderia Mercedes",
        phone: "335589215",
        desc:
            "Lavanderia de autoservicio. Contamos con jabón, suavizante, lo que necesites",
        calif: 5,
    },
    {
        negocio: "Papeleria ABC",
        phone: "6658749523",
        desc:
            "Todos los artículos escolares los encontrarás aquí con los mejores precios",
        calif: 3,
    },
];

function Featured() {
    const { theme } = useContext(ThemeContext);
    return (
        <React.Fragment>
            <div style={{height:"100%"}} className={`container-fluid ${theme}`}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        textAlign: "center",
                    }}
                >
                    <h1 className="pt-5">Mejores calificados</h1>
                </div>
                <div className="pt-3 container-fluid">
                    <div className="d-flex flex-row">
                        {calificados.map((negocio) => {
                            return (
                                <div
                                    className="card"
                                    style={{ width: "10 rem" }}
                                >
                                    <div className={`card-body ${theme}`}>
                                        <h5 className="card-title">
                                            {negocio.negocio}
                                        </h5>
                                        <h6 className="card-subtitle mb-2">
                                            {negocio.phone}
                                        </h6>
                                        <p className="card-text">
                                            {negocio.desc}
                                        </p>
                                        <a href="#" className="card-link">
                                            Ver detalles
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Featured;
