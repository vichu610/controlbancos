import React from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Header from '../componentes/header';
import Imagen from '../imagenes/bancos.jpg';
import Sidebar from '../componentes/sidebar';


const Inicio =()=>{
return(

    <>
    

    <div className='container-fluid' >
    <img src={Imagen}/>

<ul className="nav justify-content-end">
   
    <li className="nav-item">
<a className="nav-link " href="/sesion"><i className="fas fa-user-circle" aria-hidden="true"></i></a>
    </li>
    <li className="nav-item">
        
    </li>
</ul>

<div className="letras">

<h1 >Movimientos Bancarios</h1>
    <p>Controla tus cuentas bancarias y tener idea de lo que gastas</p>
    </div>
    
</div>

<Header/>




</>
);
}
export default Inicio;