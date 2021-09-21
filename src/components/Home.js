import React from "react";
import { useState } from "react/cjs/react.development";
import {useAuth} from "../context/AuthContext"

export const Home =() => {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();

    const handleLogout = async () => {
       try {
           await logout();
       }catch (error) {
           setError("Server error");
       }
    }

    return (
        <div className="modal-dialog">
            <div className="modal-header">
                {error && <p className="error">{error} </p>}
                <img src="../logo.svg" alt="user" />
            </div>
            <div className="modal-content">
                <h1>medStudio te da la bienvenida</h1>
                <p>{currentUser.email}</p>
            </div>
            <button className="logout-button" onClick={handleLogout}>Cerrar sesion</button>
        </div>
    )
}