import React from 'react';

const Sidebar=()=>
{
    return(
<>


    <a className="btn" data-toggle='collapse' href="#contentId" aria-expanded="false" aria-controls="contentId">
        <i className="fa fa-bars" aria-hidden="true"></i></a>

<div  id='contentId'>
<ul>
<li className="nav-item">
        <a className="nav-link" href="/">Inicio</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/registrar">Registrarse</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Movimientos</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Capturar Movimientos</a>
    </li>
</ul>
</div>

</>
    )

}

export default Sidebar;