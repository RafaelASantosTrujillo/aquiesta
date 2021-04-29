import React, { useState } from "react";


function Login (){
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form>
                <div className="col align-items-center">
                <h3> Inicia sesión </h3>
                </div>
                <div className="form-group">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

export default Login;