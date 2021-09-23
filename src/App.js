import React from 'react';
import Inicio from './paginas/inicio';
import Sesion from './paginas/sesion';
import Registrar from './paginas/registrar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';





function App() {
  return (
    
    
    <Router>
    <Switch>
    

    <Route exact path='/' component={Inicio}>
   
     </Route>
     <Route exact path='/sesion' component={Sesion} >
   
     </Route>
     
     <Route exact path='/registrar' component={Registrar} >
   
     </Route>
 
      
      
    </Switch>
  </Router>
  

);
}

export default App;
