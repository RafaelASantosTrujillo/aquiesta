
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ThemeContext from "../context/ThemeContext";
import { AuthContext } from "./context";

//URL del fake-backend
const URL = "http://localhost:4000/usuarios";

function Login() {
    const {theme} = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    const loginHandler = () => {
        authContext.login();
    };



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
                const response = await fetch(URL);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
        if (logInUser) {
            const loginHandler = () => {
                authContext.login();
            };
        }
    }, []);

    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        setSignIn({ ...signIn, [event.target.name]: event.target.value });
        console.log(signIn);
    };

    const logInUser = (email, password) => {
        let keys = Object.keys(users);
        let exists = false;
        for (keys in users) {
            console.log(keys, users[keys].email, users[keys].password);
            if (users[keys].email === email && users[keys].password === password) {
                exists = true;
            }
        }
        if (exists) {
            //loginHandler();
            authContext.user = users.name;
            alert(`usuario con "${email}" autorizado y authContext "${authContext.isLoggedIn}"`);
            return true
        }
        else {
            alert("Contraseña o usuario equivocado");
            return false
        }

    }

    const handleSubmit = () => {
        console.log(signIn);
        logInUser(signIn.email, signIn.password);
        setSignIn({
            email: '',
            password: ''
        })
    };

    return (
        <div style={{height:"100%"}} className={ `container-fluid d-flex justify-content-center ${theme}`}>
            <form onSubmit={handleSubmit}>
                <div className="col align-items-center">
                    <h3> Inicia sesión </h3>
                </div>
                {/*state.errorMessage && (
                    <span className="form-error">{state.errorMessage}</span>
                )*/}
                <div className="form-group">
                    <label className="form-label">Correo</label>
                    <input type="email"
                        className="form-control"
                        placeholder="correo@example.com"
                        name="email"
                        value={signIn.email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        value={signIn.password}
                        onChange={handleChange}
                        required />
                </div>
                <button type="submit"
                    className="btn btn-primary btn-block"
                >Enviar
                </button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                <div className="form-group mt-4">
                    <div className="nav-item">
                        <p>¿Eres nuevo?
                            <Link className="link-primary " to="/register">
                                Registrate aquí
                    </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;