import React, { useState } from "react";
import PropTypes from 'prop-types';
import Commerce from "./Commerce";

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


function Register(props) {
    /*estado para registro de Usuarios*/
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [usrState, setUsrState] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(false);
    const [form, setForm] = useState(false);
    /* estado para registro de Negocio*/
    const [negocio, setNegocio] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [state, setState] = useState('');
    const [desc, setDesc] = useState('');
    const [mailNeg, setMailNeg] = useState('');
    const [web, setWeb] = useState('');
    const [price, setPrice] = useState('');

    const submitHandlerRegister = () => {
        console.log(name, lastname, gender, usrState, mail, password, type);
        console.log(negocio, phone, category, state, desc, mailNeg, web, price);
        if (type === true) {
            setForm(true);
        }

    }

    const changeHandlerRegister = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const input = target.name;
        switch (input) {
            case 'name':
                setName(value);
                console.log("nombre es ", name);
                break;
            case 'lastname':
                setLastName(value);
                console.log("apellido es ", lastname);
                break;
            case 'gender':
                setGender(value);
                console.log("genero es ", gender);
                break;
            case 'usrState':
                setUsrState(value);
                console.log("estado es ", usrState);
                break;
            case 'mail':
                setMail(value);
                console.log("correo es", mail);
                break;
            case 'password':
                setPassword(value);
                console.log("contraseña ", password);
                break;
            case 'type':
                setType(value);
                console.log("typo ", type);
                break;
            /*Negocio */
            case 'negocio':
                setNegocio(value);
                console.log("nombre es ", negocio);
                break;
            case 'phone':
                setPhone(value);
                console.log("numero es ", phone);
                break;
            case 'category':
                setCategory(value);
                console.log("categoria es ", category);
                break;
            case 'state':
                setState(value);
                console.log("estado es ", state);
                break;
            case 'desc':
                setDesc(value);
                console.log("descripcion es", desc);
                break;
            case 'mailNeg':
                setMailNeg(value);
                console.log("mail es ", mailNeg);
                break;
            case 'web':
                setWeb(value);
                console.log("web es ", web);
                break;
            case 'price':
                setPrice(value);
                console.log("rango de precio es ", price);
                break;
        }
    }

    const submitHandlerCommerce = () => {
        console.log(negocio, phone, category, state, desc, mailNeg, web, price);
    }

    if (form === false) {
        return (
            <React.Fragment>
                <div className="pt-3 mb-3 ms-5  container-fluid d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <h1>¡Bienvenido!</h1>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <h2>Queremos que te unas a nuestra comunidad</h2>
                    </div>
                    <div className="m-4 pt-4 container-fluid">
                        <form className="row g-3 d-flex flex-column" onSubmit={submitHandlerRegister}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={changeHandlerRegister}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Apellido(s)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        value={lastname}
                                        onChange={changeHandlerRegister}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="pt-3 g-3 row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <div className="flex-row">
                                        <label className="form-label"> Género </label>
                                    </div>
                                    <div className="flex-row ">
                                        <select value={gender}
                                            className="form-select"
                                            onChange={changeHandlerRegister}
                                            name="gender"
                                            required>
                                            <option defaultValue>Selecciona tu género</option>
                                            <option value="femenino"> Femenino </option>
                                            <option value="masculino">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 g-3">
                                    <div className="flex-row">
                                        <label className="form-label"> Estado </label>
                                    </div>
                                    <div className="flex-row mb-3">
                                        <select value={usrState}
                                            className="form-select"
                                            onChange={changeHandlerRegister}
                                            name="usrState"
                                            required>
                                            <option defaultValue>Selecciona tu estado</option>
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
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Correo</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="mail"
                                        value={mail}
                                        onChange={changeHandlerRegister}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={changeHandlerRegister}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="pt-3 row d-flex justify-content-center">
                                <div className="g-3  form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={type}
                                        name="type"
                                        onChange={changeHandlerRegister}
                                    />
                                    <label className="form-label">Soy dueño de un negocio</label>
                                </div>
                            </div>
                            <div className="pt-3 row-md-3 g-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <Commerce
                name={name}
                submitHandlerCommerce={submitHandlerCommerce}
                changeHandlerRegister={changeHandlerRegister}
            />
        );
    }
}

Register.propTypes = {
    name: PropTypes.string,
    submitHandlerCommerce: PropTypes.func,
    changeHandlerRegister: PropTypes.func,
    negocio: PropTypes.string
}

export default Register;