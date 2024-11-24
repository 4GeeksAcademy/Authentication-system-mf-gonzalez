import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const result = await actions.Signup(email, password);
        if (result) {
            setEmail("");
            setPassword("");
            navigate("/login");
            alert("Usuario registrado con éxito");
        } else {
            alert("Error al registrar el usuario");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="mt-3 mb-3">Registrate</h2>
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

                <button className="btn btn-pink me-3" type="button">Registrate</button>
            </form>
        </div>
    );
};

export default Signup;