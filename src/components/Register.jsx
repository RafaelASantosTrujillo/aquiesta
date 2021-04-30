import React, { useState } from "react";
import PropTypes from 'prop-types';
import Commerce from "./Commerce";

//URL del fake-backend
const URL = "http://localhost:4000/usuarios";

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
    /*Para ver si hay que registrar un Negocio*/
    const [form, setForm] = useState(false);
    /*Negocio -BD*/
    const [newNeg, setNewNeg] = useState({
        negocio: '',
        phone: '',
        category: '',
        state: '',
        desc: '',
        mailNeg: '',
        web: '',
        prince: ''
    });
    /*User - BD*/
    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        gender: '',
        usrState: '',
        mail: '',
        password: '',
        type: false
    });
    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setNewUser(data);
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

    const submitHandlerRegister = async (newUser) => {
        console.log(newUser);
        const exists = newUser.find(e => newUser.mail === e.mail);
        if (exists) {
            alert(`${newUser.mail} ya existe!`)
            return
        }

        const config = {
            url: URL,
            method: "POST"
        };

        const data = {
            name: newUser.name,
            lastname: newUser.lastname,
            gender: newUser.gender,
            usrState: newUser.usrState,
            mail: newUser.mail,
            password: newUser.password,
            type: newUser.type
        };

        /*try {
            const response = await goToBackend(config, data);
            if (!response.ok) throw new Error("Response not ok");

            const usr = await response.json();

        } catch (error) {
            console.log(error);
        }*/

        if (newUser.type === true) {
            setForm(true);
        }

    }

    const changeHandlerUser = (e) => {
        (e.target.type === 'checkbox') ? setNewUser({...newUser,[e.target.name]: e.target.checked}) :
                                        setNewUser({ ...newUser, [e.target.name]: e.target.value});
        console.log(newUser);

    }

    const changeHandlerNeg = (e) => {
        /*const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const input = target.name;*/
        setNewNeg({
            ...newNeg,
            [e.target.name]: e.target.value
        });
        console.log(newNeg);
    }

    const submitHandlerCommerce = () => {
        //console.log(negocio, phone, category, state, desc, mailNeg, web, price);
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
                                    <div className="flex-row ">
                                        <select value={newUser.gender}
                                            className="form-select"
                                            onChange={changeHandlerUser}
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
                                        <select value={newUser.usrState}
                                            className="form-select"
                                            onChange={changeHandlerUser}
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
                                        value={newUser.mail}
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
                name={newUser.name}
                submitHandlerCommerce={submitHandlerCommerce}
                changeHandlerRegister={changeHandlerNeg}
            />
        );
    }
}

Register.propTypes = {
    newUser: PropTypes.object,
    submitHandlerCommerce: PropTypes.func,
    changeHandlerNeg: PropTypes.func,
    newNeg: PropTypes.object
}

export default Register;