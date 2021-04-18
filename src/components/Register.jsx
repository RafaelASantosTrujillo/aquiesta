import React from "react";
import Commerce from "./Commerce";
function Register() {
    return (
        <React.Fragment>
            <div className="pt-3 mb-3 container-fluid d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <h1>Registrate</h1>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <h2>Queremos que te unas a nuestra comunidad</h2>
                </div>
                <div className="pt-5 container-fluid d-flex justify-content-center">
                    <form>
                        <div className="mb-3">
                            <div className="row g-3 d-flex flex-row align-items-center">
                                <div className="col-auto">
                                    <label
                                        for="nameRegister"
                                        class="col-form-label"
                                        required
                                    >
                                        Nombre
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-auto">
                                    <label
                                        for="lastNameRegister"
                                        class="col-form-label"
                                        required
                                    >
                                        Apellido
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row g-3 d-flex flex-row align-items-center">
                                <div className="col-auto">
                                    <label
                                        for="genderRegister"
                                        class="col-form-label"
                                    >
                                        Genero
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <select className="form-select" required>
                                        <option selected>
                                            Selecciona tu género
                                        </option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label
                                        for="stateRegister"
                                        class="col-form-label"
                                    >
                                        ¿En qué estado vives?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="col-auto">
                                        <select
                                            className="form-select"
                                            required
                                        >
                                            <option selected>
                                                Selecciona tu estado
                                            </option>
                                            <option value="Aguascalientes">
                                                Aguascalientes
                                            </option>
                                            <option value="Baja California">
                                                Baja California
                                            </option>
                                            <option value="Baja California Sur">
                                                Baja California Sur
                                            </option>
                                            <option value="Campeche">
                                                Campeche
                                            </option>
                                            <option value="Chiapas">
                                                Chiapas
                                            </option>
                                            <option value="Chihuahua">
                                                Chihuahua
                                            </option>
                                            <option value="CDMX">
                                                Ciudad de México
                                            </option>
                                            <option value="Coahuila">
                                                Coahuila
                                            </option>
                                            <option value="Colima">
                                                Colima
                                            </option>
                                            <option value="Durango">
                                                Durango
                                            </option>
                                            <option value="Estado de Mexico">
                                                Estado de México
                                            </option>
                                            <option value="Guanajuato">
                                                Guanajuato
                                            </option>
                                            <option value="Guerrero">
                                                Guerrero
                                            </option>
                                            <option value="Hidalgo">
                                                Hidalgo
                                            </option>
                                            <option value="Jalisco">
                                                Jalisco
                                            </option>
                                            <option value="Michoacan">
                                                Michoacán
                                            </option>
                                            <option value="Morelos">
                                                Morelos
                                            </option>
                                            <option value="Nayarit">
                                                Nayarit
                                            </option>
                                            <option value="Nuevo Leon">
                                                Nuevo León
                                            </option>
                                            <option value="Oaxaca">
                                                Oaxaca
                                            </option>
                                            <option value="Puebla">
                                                Puebla
                                            </option>
                                            <option value="Queretaro">
                                                Querétaro
                                            </option>
                                            <option value="Quintana Roo">
                                                Quintana Roo
                                            </option>
                                            <option value="San Luis Potosi">
                                                San Luis Potosí
                                            </option>
                                            <option value="Sinaloa">
                                                Sinaloa
                                            </option>
                                            <option value="Sonora">
                                                Sonora
                                            </option>
                                            <option value="Tabasco">
                                                Tabasco
                                            </option>
                                            <option value="Tamaulipas">
                                                Tamaulipas
                                            </option>
                                            <option value="Tlaxcala">
                                                Tlaxcala
                                            </option>
                                            <option value="Veracruz">
                                                Veracruz
                                            </option>
                                            <option value="Yucatan">
                                                Yucatán
                                            </option>
                                            <option value="Zacatecas">
                                                Zacatecas
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row g-3 d-flex flex-row align-items-center">
                                <div className="col-auto">
                                    <label
                                        for="emailRegister"
                                        className="form-label"
                                    >
                                        Correo
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailRegister"
                                    />
                                </div>
                                <div className="col-auto">
                                    <label
                                        for="passwordRegister"
                                        className="form-label"
                                    >
                                        Contraseña
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordRegister"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexSwitchCheckDefault"
                                    >
                                        Soy dueño de un negocio
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 d-flex flex-row justify-content-center">
                            <button type="submit" className="btn btn-primary">
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
