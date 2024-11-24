import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import { Link } from 'react-router-dom';



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="mb-4">Bienvenido a Nuestra Aplicación</h1>
                    <p className="mb-4">Por favor, inicia sesión o regístrate para continuar.</p>
                    <div className="d-grid gap-2 d-md-block">
                        <Link to="/login" className="btn btn-pink btn-lg me-3" type="button">Inicia sesión Aquí!</Link>
                        <Link to="/signup" className="btn btn-orange btn-lg" type="button">Regístrate Ya!</Link>
                    </div>
                </div>
            </div>
        </div>
	);
};