import React from 'react';

function Commerce() {
    return (
        <div className="pt-3 mb-3 container-fluid d-flex flex-column">
            <div className="d-flex justify-content-center">
                <h1>Gracias por registrarte Fulanito</h1>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <h2>Ahora registraremos tu negocio</h2>
            </div>
            <div className="pt-5 container-fluid d-flex justify-content-center">
                <form>
                    <div className="mb-3">
                        <div className="row g-3 d-flex flex-row align-items-center">
                            <div className="col-auto">
                                <label className="col-form-label" required>Nombre de tu negocio</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label className="col-form-label" required>Teléfono</label>
                            </div>
                            <div className="col-auto">
                                <input type="number" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row g-3 d-flex flex-row align-items-center">
                            <div className="col-auto">
                                <label  className="col-form-label">Categoria</label>
                            </div>
                            <div className="col-auto">
                                <select className="form-select" required>
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
                            <div className="col-auto">
                                <label className="col-form-label">¿Dónde se ubica?</label>
                            </div>
                            <div className="col-auto">
                                <div className="col-auto">
                                    <select className="form-select" required>
                                        <option defaultValue="">Selecciona tu estado</option>
                                        <option value="Aguascalientes">Aguascalientes</option>
                                        <option value="Baja California">Baja California</option>
                                        <option value="Baja California Sur">Baja California Sur</option>
                                        <option value="Campeche">Campeche</option>
                                        <option value="Chiapas">Chiapas</option>
                                        <option value="Chihuahua">Chihuahua</option>
                                        <option value="CDMX">Ciudad de México</option>
                                        <option value="Coahuila">Coahuila</option>
                                        <option value="Colima">Colima</option>
                                        <option value="Durango">Durango</option>
                                        <option value="Estado de Mexico">Estado de México</option>
                                        <option value="Guanajuato">Guanajuato</option>
                                        <option value="Guerrero">Guerrero</option>
                                        <option value="Hidalgo">Hidalgo</option>
                                        <option value="Jalisco">Jalisco</option>
                                        <option value="Michoacan">Michoacán</option>
                                        <option value="Morelos">Morelos</option>
                                        <option value="Nayarit">Nayarit</option>
                                        <option value="Nuevo Leon">Nuevo León</option>
                                        <option value="Oaxaca">Oaxaca</option>
                                        <option value="Puebla">Puebla</option>
                                        <option value="Queretaro">Querétaro</option>
                                        <option value="Quintana Roo">Quintana Roo</option>
                                        <option value="San Luis Potosi">San Luis Potosí</option>
                                        <option value="Sinaloa">Sinaloa</option>
                                        <option value="Sonora">Sonora</option>
                                        <option value="Tabasco">Tabasco</option>
                                        <option value="Tamaulipas">Tamaulipas</option>
                                        <option value="Tlaxcala">Tlaxcala</option>
                                        <option value="Veracruz">Veracruz</option>
                                        <option value="Yucatan">Yucatán</option>
                                        <option value="Zacatecas">Zacatecas</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Descripción</label>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                        <label className="form-label">Agrega una breve descripción de tu negocio</label>
                    </div>
                    </div>
                    <div className="mb-3">
                        <div className="row g-3 d-flex flex-row align-items-center">
                            <div className="col-auto">
                                <label className="form-label">Correo</label>
                            </div>
                            <div className="col-auto">
                                <input type="email" className="form-control" id="emailCommerce" />
                            </div>
                            <div className="col-auto">
                                <label className="form-label">Página web</label>
                            </div>
                            <div className="col-auto">
                                <input type="url" className="form-control" id="linkCommerce" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row g-3 d-flex flex-row align-items-center">
                            <div className="col-auto">
                                <label className="col-form-label">¿Cuánto vale lo que ofreces?</label>
                            </div>
                            <div className="col-auto">
                                <select className="form-select" required>
                                    <option defaultValue="">Selecciona una rango de precios</option>
                                    <option value="1">$1-$100</option>
                                    <option value="2">$1-$1000</option>
                                    <option value="3">$50-$500</option>
                                    <option value="4">$50-$1000</option>
                                    <option value="5">$1-$2500</option>
                                    <option value="6">$100-$5000</option>
                                    <option value="7">$200-$2500</option>
                                    <option value="8">Otro</option>
                                    <option value="9">PReguntar por mensaje</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 d-flex flex-row justify-content-center">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default Commerce;