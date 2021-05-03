import React from 'react';

let buscados = [
    {
        negocio: "Quesadillas Juanita",
        phone: '755631589',
        desc: "Vendemos quesadillas, pambazos, tacos, sopes, tostadas y mucho mas"
    }, {
        negocio: "Taqueria Los Hermanos",
        phone: '332642558',
        desc: "Tus tacos favoritos desde 1976 con la mejor calidad"
    }, {
        negocio: "Lavanderia Mercedes",
        phone: '335589215',
        desc: "Lavanderia de autoservicio. Contamos con jabón, suavizante, lo que necesites"
    }, {
        negocio: "Papeleria ABC",
        phone: '6658749523',
        desc: "Todos los artículos escolares los encontrarás aquí con los mejores precios"
    }
]

let calificados = [
    {
        negocio: "Quesadillas Juanita",
        phone: '755631589',
        desc: "Vendemos quesadillas, pambazos, tacos, sopes, tostadas y mucho mas",
        calif: 4
    }, {
        negocio: "Taqueria Los Hermanos",
        phone: '332642558',
        desc: "Tus tacos favoritos desde 1976 con la mejor calidad",
        calif: 3.5
    }, {
        negocio: "Lavanderia Mercedes",
        phone: '335589215',
        desc: "Lavanderia de autoservicio. Contamos con jabón, suavizante, lo que necesites",
        calif: 5
    }, {
        negocio: "Papeleria ABC",
        phone: '6658749523',
        desc: "Todos los artículos escolares los encontrarás aquí con los mejores precios",
        calif: 3
    }
]

function Featured() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div style={{ display: "flex", justifyContent: "left", textAlign: "center" }}>

                    <h1>Recientemente buscados</h1>
                </div>
                <div className="pt-3 container-fluid">
                    <div className="d-flex flex-row">
                        {
                            buscados.map(negocio => {
                                return (
                                    <div className="card" style={{ width: "10 rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{negocio.negocio}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{negocio.phone}</h6>
                                            <p className="card-text">{negocio.desc}</p>
                                            <a href="#" className="card-link">Ver detalles</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "left", textAlign: "center" }}>
                    <h1 className="pt-5">Mejores calificados</h1>
                </div>
                <div className="pt-3 container-fluid">
                    <div className="d-flex flex-row">
                        {
                            calificados.map(negocio => {
                                return (
                                    <div className="card" style={{ width: "10 rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{negocio.negocio}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{negocio.phone}</h6>
                                            <p className="card-text">{negocio.desc}</p>
                                            <a href="#" className="card-link">Ver detalles</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Featured;