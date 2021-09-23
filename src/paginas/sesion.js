import React  from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Sesion=()=>{

const [usuario,setUsuario]=useState({
    usuario:'',
    pass:''

})

    const onSubmit=(e)=>{
        e.preventDefault();

    }
    const onChange=(e)=>{
        
     setUsuario({
         ...usuario,
         [e.target.name]:e.target.value
        
        })

    }
    return(
  
    <div className="container contenedor">
    <h1 className='titulo'>Inicio Sesión</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group row">
                <label forhtml="inputName" className="col-sm-1-12 col-form-label">Usuario</label>
                <div className="col-sm-1-12">
                    <input type="text" 
                    className="form-control" 
                    name="usuario" 
                    
                    onChange={onChange}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label forhtml="inputName" className="col-sm-1-12 col-form-label">Contraseña</label>
                <div className="col-sm-1-12">
                </div>
                <input type="password" 
                className="form-control" 
                name="pass"  
                onChange={onChange}
                />
            </div>
                    
               
            <div className="form-group row">
                <div className="offset-sm-3 col-sm-10">
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    <Link to='/registrar'>
                     <button className="btn btn-primary" >Registrar</button>
                     </Link>
                                     
                    </div>
                 
            </div>
            
               
            
        </form>
        

        </div>

);
}
export default Sesion;