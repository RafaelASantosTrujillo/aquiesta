import React, { useState } from "react";
import Commerce from "./Commerce";

let states = [
    {
        label: "Aguascalientes",
        key: 'Aguascalientes',
        value: 'Aguascalientes'
    }, {
        label: "Baja California",
        key: 'Baja California',
        value: 'Baja California'
    }, {
        label: "Campeche",
        key: 'Campeche',
        value: 'Campeche'
    }, {
        label: "Chiapas",
        key: 'Chiapas',
        value: 'Chiapas'
    }, {
        label: "Chihuahuas",
        key: 'Chihuahua',
        value: 'Chihuahua'
    }, {
        label: "Ciudad de México",
        key: 'Ciudad de México',
        value: 'Ciudad de México'
    }, {
        label: "Coahuila",
        key: 'Coahuila',
        value: 'Coahuila'
    }, {
        label: "Colima",
        key: 'Colima',
        value: 'Colima'
    }, {
        label: "Durango",
        key: 'Durango',
        value: 'Durango'
    }, {
        label: "Estado de México",
        key: 'Estado de México',
        value: 'Estado de México'
    }, {
        label: "Guanajuato",
        key: 'Guanajuato',
        value: 'Guanajuato'
    }, {
        label: "Guerrero",
        key: 'Guerrero',
        value: 'Guerrero'
    }, {
        label: "Hidalgo",
        key: 'Hidalgo',
        value: 'Hidalgo'
    }, {
        label: "Jalisco",
        key: 'Jalisco',
        value: 'Jalisco'
    }, {
        label: "Michoacán",
        key: 'Michoacán',
        value: 'Michoacán'
    }, {
        label: "Morelos",
        key: 'Morelos',
        value: 'Morelos'
    }, {
        label: "Nayarit",
        key: 'Nayarit',
        value: 'Nayarit'
    }, {
        label: "Nuevo León",
        key: 'Nuevo León',
        value: 'Nuevo León'
    }, {
        label: "Oaxaca",
        key: 'Oaxaca',
        value: 'Oaxaca'
    }, {
        label: "Puebla",
        key: 'Puebla',
        value: 'Puebla'
    }, {
        label: "Querétaro",
        key: 'Querétaro',
        value: 'Querétaro'
    }, {
        label: "Quintana Roo",
        key: 'Quintana Roo',
        value: 'Quintana Roo'
    }, {
        label: "San Luis Potosí",
        key: 'San Luis Potosí',
        value: 'San Luis Potosí'
    }, {
        label: "Sinaloa",
        key: 'Sinaloa',
        value: 'Sinaloa'
    }, {
        label: "Sonora",
        key: 'Sonora',
        value: 'Sonora'
    }, {
        label: "Tabasco",
        key: 'Tabasco',
        value: 'Tabasco'
    }, {
        label: "Tamaulipas",
        key: 'Tamaulipas',
        value: 'Tamaulipas'
    }, {
        label: "Tlaxcala",
        key: 'Tlaxcala',
        value: 'Tlaxcala'
    }, {
        label: "Veracruz",
        key: 'Veracruz',
        value: 'Veracruz'
    }, {
        label: "Yucatán",
        key: 'Yucatán',
        value: 'Yucatán'
    }, {
        label: "Zacatecas",
        key: 'Zacatecas',
        value: 'Zacatecas'
    }
]

let formElements = [
    {
        label: "Nombre",
        key: 'name',
        type: 'text'
    }, {
        label: "Apellido(s)",
        key: 'lastname',
        type: 'text'
    },
    {
        label: "Género",
        key: 'gender',
        type: 'select'
    }, {
        label: "Estado",
        key: 'state',
        type: 'select'
    },
    {
        label: "Correo",
        key: 'mail',
        type: 'mail'
    }, {
        label: "Contraseña",
        key: 'password',
        type: 'password'
    }, {
        label: "Soy dueño de un negocio",
        key: 'type',
        type: 'checkbox'
    }
]




function Register() {
    const [formData, setFormData] = useState({})
    const [formState, setFormState] = useState({})

    const handleChange = (value, key) => {
        setFormData({ ...formData, ...{ [key]: value } });
    }
    const submit = () => {
        if (isFormInValid()) {
            return
        }
        alert(JSON.stringify(formData))
    }

    const isFormInValid = () => {
        let returnValue = false;
        formElements.forEach(formElement => {
            if (formData[formElement.key] === undefined) {
                alert(formElement.label + " is missing");
                returnValue = true
            }
        })

        return returnValue
    }



    return (
        <React.Fragment>
            <div className="pt-3 mb-3 container-fluid d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <h1>Registrate</h1>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <h2>Queremos que te unas a nuestra comunidad</h2>
                </div>
                <div className="m-4 pt-4 container-fluid d-flex justify-content-center">
                    <form className="row g-3 d-flex flex-row" novalidate>
                        {formElements.map(formElement => {
                            if (formElement.type === "select" && formElement.key === "gender") {
                                return <div className="g-3 col-auto">
                                    <label
                                        for={formData[formElement.label]}
                                        className="form-label">
                                        {formElement.label}
                                    </label>
                                    <select onChange={(e) => {
                                        handleChange(e.target.value, formElement.key)
                                    }}
                                        className="form-select">
                                        <option value="" key="" selected>Selecciona tu género</option>
                                        <option value="femenino" key="femenino"> Femenino </option>
                                        <option value="masculino" key="masculino">Masculino</option>
                                    </select>
                                </div>
                            } else if (formElement.type === "select" && formElement.key === "state") {
                                return <div className="col-auto">
                                    <label
                                        className="form-label">
                                        {formElement.label}
                                    </label>
                                    <select onChange={(e) => {
                                        handleChange(e.target.value, formElement.key)
                                    }}
                                        className="form-select">
                                        <option value="" key="" selected>Selecciona tu estado</option>
                                        {
                                            states.map(state => {
                                                return <option
                                                    value={state.value}
                                                    key={state.key}
                                                >
                                                    {state.label}
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>
                            } else if (formElement.type === "checkbox") {
                                return <div className="form-check">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type={formElement.type}
                                            key={formElement.key}
                                        />
                                        <label
                                            className="form-check-label"
                                        >
                                            {formElement.label}
                                        </label>
                                    </div>
                                </div>
                            }
                            else {
                                return <div className="col-md-3">
                                    <label
                                        className="form-label">
                                        {formElement.label}
                                    </label>
                                    <input
                                        className="form-control"
                                        type={formData[formElement.type]}
                                        value={formData[formElement.key]}
                                        onChange={(e) => {
                                            handleChange(e.target.value, formElement.key)
                                        }}
                                    />
                                </div>
                            }
                        })}
                        <div className="pt-3 d-flex flex-row justify-content-center">
                            <button type="submit" className="btn btn-primary" onClick={
                                (e) => {
                                    e.preventDefault();
                                    submit()
                                }}>
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Commerce />
        </React.Fragment>
    );

}

export default Register;