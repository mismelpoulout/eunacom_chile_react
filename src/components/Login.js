import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";

import {useAuth} from "../context/AuthContext";

export const Login = () => {
    const { login} = useAuth();
    const [error,setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    
    const handleSubmit = async (e) => {
        e.providerDefault();
        try{
           await login(email, password);
           history.push("/");
           }catch(error){
       setError("Wrong Crendentials");
       setTimeout(() => setError(""),1500 ); 
        }
    }

    return(
        <div className="container">
            <div className="modal fade" id="registro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {error && <p className ="error">{error} </p>}
                            <h5 className="modal-title" id="exampleModalLabel">Usuarios registrados</h5>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmail}/>
                                <label for="floatingInput">Correo</label>
                            </div>
                            <br />
                            <div className="form-floating">
                                <label for="floatingPassword">Contraseña</label>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePassword}/>
                                <br/>
                                <input type="submit" className="form-control"  value="Sign Up"  />

                            </div>
                          </form>  
                    </div>
                </div>
                <p>No estas registrado?? <Link to = "/SignUp">Registrarse</Link> </p>
            </div>

        </div></div>
    )
}