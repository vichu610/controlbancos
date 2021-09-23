import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

const Registrar=()=>{

  const[registro,setRegistro]=useState(
  {
      id:uuid4(),
      nombre:'',
      usuario:'',
      pass:'',
      rpass:'',
      correo:''
    }
  )
  const onSubmit=(e)=>{
    e.preventDefault();

  }

  const onChange=(e)=>{
     
    setRegistro({
      ...registro,
      [e.target.name]:e.target.value
    })

  }
  return(

    <>
<h1>{registro}</h1>
<div className='container '>
<h1 className='titulo'>Registrar usuario</h1>
<form>

<div className="form-group">
  <label forhtml="">Nombre</label>
  <input type="text"
    className="form-control" name="nombre" id=""  
    onChange={onChange}
    />
  
</div>
<div className="form-group">
  <label forhtml="">Usuario</label>
  <input type="text"
    className="form-control" name="usuario" id=""  
    onChange={onChange}
    
    />
  
</div>
<div className="form-group">
  <label forhtml="">Contraseña</label>
  <input type="password" 
  className="form-control" name="pass" id="" 
  placeholder=""
  onChange={onChange}
  />
</div>

<div className="form-group">
  <label forhtml="">Repetir Contraseña</label>
  <input type="password" 
  className="form-control" name="rpass" id=""
   placeholder=""
   onChange={onChange}
   />
</div>

<div className="form-group">
  <label forhtml="">Correo</label>
  <input type="email" 
  className="form-control" name="correo" id=""  
  placeholder=""
  onChange={onChange}
  />
  </div>

<Link to='/sesion'>
<button type="button" id='boton' 
className="btn btn-primary "
onSubmit={onSubmit}
>Registrar</button>
</Link>

</form>

</div>
</>
    )}

export default Registrar;