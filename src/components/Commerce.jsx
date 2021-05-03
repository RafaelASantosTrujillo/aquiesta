import React from 'react';

let states = [
    {
        label: "Aguascalientes",
        value: 'Aguascalientes'
    }, {
        label: "Baja California",
        value: 'Baja California'
    }, {
        label: "Campeche",
        value: 'Campeche'
    }, {
        label: "Chiapas",
        value: 'Chiapas'
    }, {
        label: "Chihuahua",
        value: 'Chihuahua'
    }, {
        label: "Ciudad de México",
        value: 'Ciudad de México'
    }, {
        label: "Coahuila",
        value: 'Coahuila'
    }, {
        label: "Colima",
        value: 'Colima'
    }, {
        label: "Durango",
        value: 'Durango'
    }, {
        label: "Estado de México",
        value: 'Estado de México'
    }, {
        label: "Guanajuato",
        value: 'Guanajuato'
    }, {
        label: "Guerrero",
        value: 'Guerrero'
    }, {
        label: "Hidalgo",
        value: 'Hidalgo'
    }, {
        label: "Jalisco",
        value: 'Jalisco'
    }, {
        label: "Michoacán",
        value: 'Michoacán'
    }, {
        label: "Morelos",
        value: 'Morelos'
    }, {
        label: "Nayarit",
        value: 'Nayarit'
    }, {
        label: "Nuevo León",
        value: 'Nuevo León'
    }, {
        label: "Oaxaca",
        value: 'Oaxaca'
    }, {
        label: "Puebla",
        value: 'Puebla'
    }, {
        label: "Querétaro",
        value: 'Querétaro'
    }, {
        label: "Quintana Roo",
        value: 'Quintana Roo'
    }, {
        label: "San Luis Potosí",
        value: 'San Luis Potosí'
    }, {
        label: "Sinaloa",
        value: 'Sinaloa'
    }, {
        label: "Sonora",
        value: 'Sonora'
    }, {
        label: "Tabasco",
        value: 'Tabasco'
    }, {
        label: "Tamaulipas",
        value: 'Tamaulipas'
    }, {
        label: "Tlaxcala",
        value: 'Tlaxcala'
    }, {
        label: "Veracruz",
        value: 'Veracruz'
    }, {
        label: "Yucatán",
        value: 'Yucatán'
    }, {
        label: "Zacatecas",
        value: 'Zacatecas'
    }
]

function Commerce(props) {
    const neg = props.newNeg;

    console.log("props ", props);
    return (
        <div className="pt-3 mb-3 container-fluid d-flex flex-column">
            <div className="d-flex justify-content-center">
                <h1>Gracias por registrarte {props.name}
                </h1>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <h2>¡Ahora registraremos tu negocio!</h2>
            </div>
            <div className="m-4 pt-4 container-fluid">
                <form className="row g-3 d-flex flex-column" onSubmit={props.submitHandlerCommerce}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3">
                            <label className="col-form-label" required>Nombre de tu negocio</label>
                            <input
                                type="text"
                                className="form-control"
                                name="negocio"
                                value={neg.negocio}
                                onChange={props.changeHandlerRegister}
                                required />
                        </div>
                        <div className="col-auto">
                            <label className="col-form-label" required>Teléfono</label>
                            <input type="number" 
                            className="form-control"
                            name="phone"
                            value={neg.phone}
                            onChange={props.changeHandlerRegister}
                            required />
                        </div>
                        <div className="col-auto">
                            <div className="flex-row">
                                <label className="form-label">Categoria</label>
                            </div>
                            <div className="row-12 ">
                                <select className="form-select" 
                                    onChange={props.changeHandlerRegister}
                                    value={neg.category}
                                    name="category"
                                    required>
                                    <option defaultValue="">Selecciona una categoria</option>
                                    <option value="1">Abarrotes</option>
                                    <option value="2">Clínica y/o farmacia</option>
                                    <option value="3">Estética</option>
                                    <option value="4">Pastelería</option>
                                    <option value="5">Pizzería</option>
                                    <option value="6">Restaurante</option>
                                    <option value="7">Taquería</option>
                                    <option value="8">Tienda de autoservicio</option>
                                    <option value="9">Papelería</option>
                                    <option value="10">Cerrajería</option>
                                    <option value="11">Otro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 row d-flex justify-content-center">
                        <div className="col-auto">
                            <div className="flex-row">
                                <label className="form-label">¿Dónde se ubica?</label>
                            </div>
                            <div className="flex-row ">
                                <select className="form-select"
                                    value={neg.state}
                                    onChange={props.changeHandlerRegister}
                                    name="state"
                                    required>
                                    <option defaultValue="">Selecciona tu estado</option>
                                    {
                                        states.map(state => {
                                            return <option
                                                key={state.value}
                                                value={state.value}
                                            >
                                                {state.label}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Correo</label>
                            <input type="email" 
                                    className="form-control" 
                                    name="mailNeg"
                                    value={neg.mailNeg}
                                    onChange={props.changeHandlerRegister}
                                     />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Página web</label>
                            <input type="url" 
                                    className="form-control" 
                                    name="web"
                                    value={neg.web}
                                    onChange={props.changeHandlerRegister}
                                    />
                        </div>
                    </div>
                    <div className="pt-3 row d-flex justify-content-center">
                        <div className="col-md-4">
                            <label className="form-label">Descripción</label>
                            <div className="form-floating">
                                <textarea className="form-control"
                                        placeholder="Describe brevemente tu negocio"  
                                        name="desc"
                                        value={props.desc}
                                        onChange={props.changeHandlerRegister}
                                        required/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="flex-row">
                            <label className="col-form-label">¿Cuánto vale lo que ofreces?</label>
                            </div>
                            <div className="flex-row ">
                            <select className="form-select" 
                                    name="price"
                                    value={props.value}
                                    onChange={props.changeHandlerRegister}
                                    required>
                                <option defaultValue="">Selecciona una rango de precios</option>
                                <option value="1">$1-$100</option>
                                <option value="2">$1-$1000</option>
                                <option value="3">$50-$500</option>
                                <option value="4">$50-$1000</option>
                                <option value="5">$1-$2500</option>
                                <option value="6">$100-$5000</option>
                                <option value="7">$200-$2500</option>
                                <option value="8">Otro</option>
                                <option value="9">Preguntar por mensaje</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 d-flex flex-row justify-content-center">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </div >

    )
};

export default Commerce;