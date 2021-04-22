import React from "react";
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


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            gender: '',
            usrState: '',
            mail: '',
            password: '',
            type: true,
        };

        this.changeHandlerRegister = this.changeHandlerRegister.bind(this);
        this.submitHandlerRegister = this.submitHandlerRegister.bind(this);
    }

    submitHandlerRegister = (event) => {
        event.preventDefault();
        let name = this.state.name;
        let lastname = this.state.lastname;
        let gender = this.state.gender;
        let state = this.state.usrState;
        let mail = this.state.mail;
        let password = this.state.password;
        let type = this.state.type;
        console.log(this.state);
    }

    changeHandlerRegister = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="pt-3 mb-3 ms-5  container-fluid d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <h1>Registrate</h1>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <h2>Queremos que te unas a nuestra comunidad</h2>
                    </div>
                    <div className="m-4 pt-4 container-fluid">
                        <form className="row g-3 d-flex flex-column" onSubmit={this.submitHandlerRegister}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandlerRegister}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Apellido(s)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        value={this.state.lastname}
                                        onChange={this.changeHandlerRegister}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label"> Género </label>
                                    <select value={this.state.gender}
                                        className="form-select" onChange={this.changeHandlerRegister}
                                        name="gender" required>
                                        <option defaultValue>Selecciona tu género</option>
                                        <option value="femenino"> Femenino </option>
                                        <option value="masculino">Masculino</option>
                                    </select>
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label"> Estado </label>
                                    <select value={this.state.usrState}
                                        className="form-select" onChange={this.changeHandlerRegister} 
                                        name="usrState" required>
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
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Correo</label>
                                    <input
                                        className="form-control"
                                        type="mail"
                                        name="mail"
                                        onChange={this.changeHandlerRegister}
                                        required
                                    />
                                </div>
                                <div className="col-md-3 g-3">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        onChange={this.changeHandlerRegister}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 g-3 d-flex flex-row form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={this.state.type}
                                        name="type"
                                        onChange={this.changeHandlerRegister}
                                    />
                                    <label className="form-label">Soy dueño de un negocio</label>
                                </div>
                            </div>
                            <div className="row-md-3 g-3 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;