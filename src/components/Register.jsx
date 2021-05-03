import React, { useState } from "react";
import PropTypes from 'prop-types';

import Commerce from "./Commerce";

import '../css/register.css';

//URL del fake-backend
const URL1 = "http://localhost:4000/usuarios";
const URL2 = "http://localhost:4000/negocios";

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
    /*Users - BD*/
    const [users, setUsers] = useState({
        name: '',
        lastname: '',
        gender: '',
        usrState: '',
        email: '',
        password: '',
        type: false
    });

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(URL1);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    const goToBackend = (config, data) => {
        return fetch(config.url, {
            method: config.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data) : null
        });
    }
    /*Guarda un nuevo usuario en la BD */
    const postUser = async (email) => {
        let keys = Object.keys(users);
        let exists = false;
        for (keys in users) {
            console.log(keys, users[keys].email);
            if (users[keys].email === email) {
                exists = true;
            }
        }

        if (exists) {
            alert(`usuario con "${newUser.email}" ya registrado`);
            return
        }

        const config = {
            url: URL1,
            method: "POST"
        };

        const data = { ...newUser };

        try {
            const response = await goToBackend(config, data);

            if (!response.ok) throw new Error("Response not ok");
            const usuario = await response.json();
            console.log("usuario ", usuario);
        } catch (error) {
            console.log(error);
        }
    }
    /*Para ver si hay que registrar un Negocio*/
    const [form, setForm] = useState(false);
    /*User - Register*/
    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        gender: '',
        usrState: '',
        email: '',
        password: '',
        type: false
    });

    const submitHandler = (e) => {
        e.preventDefault();

        postUser(newUser.email);

        if (newUser.type === true) {
            setForm(true);
        }

        setNewUser({
            name: '',
            lastname: '',
            gender: '',
            usrState: '',
            email: '',
            password: '',
            type: false
        })

    }

    const changeHandlerUser = (e) => {
        console.log(props);
        (e.target.type === 'checkbox') ? setNewUser({ ...newUser, [e.target.name]: e.target.checked }) :
            setNewUser({ ...newUser, [e.target.name]: e.target.value });
        console.log(newUser);
    }

    /*Negocio - Register*/
    const [newNeg, setNewNeg] = useState({
        negocio: '',
        phone: '',
        category: '',
        state: '',
        desc: '',
        mailNeg: '',
        web: '',
        price: ''
    });

    const changeHandlerNeg = (e) => {
        setNewNeg({
            ...newNeg,
            [e.target.name]: e.target.value
        });
        console.log(newNeg);
    }

    const postNegocio = async () => {
        const config = {
            url: URL2,
            method: "POST"
        };

        const data = { ...newNeg };

        try {
            const response = await goToBackend(config, data);

            if (!response.ok) throw new Error("Response not ok");
            const negocio = await response.json();
            console.log("negocio ", negocio);
        } catch (error) {
            console.log(error);
        }
    }

    const submitHandlerCommerce = (e) => {
        e.preventDefault();

        postNegocio();

        setNewNeg({
            negocio: '',
            phone: '',
            category: '',
            state: '',
            desc: '',
            mailNeg: '',
            web: '',
            price: ''
        });
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
                    <div className="m-4 pt-4 container-fluid background">
                        <form className="row g-3 d-flex flex-column" onSubmit={submitHandler}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={newUser.name}
                                        onChange={changeHandlerUser}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Apellido(s)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        value={newUser.lastname}
                                        onChange={changeHandlerUser}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="pt-3 g-3 row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <div className="flex-row">
                                        <label className="form-label"> Género </label>
                                    </div>
                                    <div className="flex-row dropwdown">
                                        <select value={newUser.gender}
                                            className="btn dropdown-toggle"
                                            onChange={changeHandlerUser}
                                            name="gender"
                                            required>
                                            <option defaultValue className="dropdown-item">Selecciona tu género</option>
                                            <option value="femenino" className="dropdown-item"> Femenino </option>
                                            <option value="masculino" className="dropdown-item">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 g-3">
                                    <div className="flex-row">
                                        <label className="form-label"> Estado </label>
                                    </div>
                                    <div className="flex-row mb-3 dropdown">
                                        <select value={newUser.usrState}
                                            className="btn dropdown-toggle"
                                            onChange={changeHandlerUser}
                                            name="usrState"
                                            required>
                                            <option defaultValue className="dropdown-item">Selecciona tu estado</option>
                                            {
                                                states.map(state => {
                                                    return <option
                                                        className="dropdown-item"
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
                                        name="email"
                                        value={newUser.email}
                                        onChange={changeHandlerUser}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        value={newUser.password}
                                        onChange={changeHandlerUser}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="pt-3 row d-flex justify-content-center">
                                <div className="g-3  form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={newUser.type}
                                        name="type"
                                        onChange={changeHandlerUser}
                                    />
                                    <label className="form-label">Soy dueño de un negocio</label>
                                </div>
                            </div>
                            <div className="pt-3 row-md-3 g-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-color">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <Commerce
                name={newUser.name}
                submitHandlerCommerce={submitHandlerCommerce}
                changeHandlerRegister={changeHandlerNeg}
                newNeg={newNeg}
            />
        );
    }
}

Register.propTypes = {
    name: PropTypes.name,
    submitHandlerCommerce: PropTypes.func,
    changeHandlerNeg: PropTypes.func,
    newNeg: PropTypes.object
}

export default Register;