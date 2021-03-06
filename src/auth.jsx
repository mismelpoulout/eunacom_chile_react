import React, {useStage} from "react";
import "firebase/auth";
import {useFirebaseApp} from "reactfire";

export default (props)=> {
    return ( 
          <div className = "container">
  
           <nav className="navbar navbar-dark bg-light">
               <h1> medStudio</h1>
           </nav>
  
            <main className="form-signin">
    <form>
      <h3 className="h3 mb-3 fw-normal">Registro de usuarios</h3>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Correo</label>
      </div>
      <br/>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Contrase�a</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Recordarme
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
    <br/><br/>
    <hr/>
        <h3 className="h3 mb-3 fw-normal">Si no estas registrado</h3>
        <button className="w-100 btn btn-lg btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#registro">Registrate</button>
  
  
  </main>
  
      <p align="center" className="mt-5 mb-3 text-muted">&copy; 2020�2021</p>
  
  
    
  <div className="modal fade" id="registro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Registro de usuarios</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Correo</label>
      </div>
      <br/>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Contrase�a</label>
      </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>
  
          </div>
      );
  
  
      
  }