import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/home.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        const result = await actions.login(email, password);
        if (result) {

            setEmail("");
            setPassword("");
            navigate("/private");
        } else {

            alert("No se pudo iniciar sesión");
        }

    };


    useEffect(() => {
        if (store.user) {
            navigate("/private");
        }
    }, [store.user]);

    return (
        <div className="login-container container">
            <h2 className="my-3">Login</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-pink me-3" type="button">Iniciar Sesion</button>
                <Link to="/signup" className="btn btn-link">No estas registrado?</Link>
            </form>

        </div>
    );
};

export default Login;