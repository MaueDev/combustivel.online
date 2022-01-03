import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

/*Pages*/
import pg1 from './pages/Pagina1';
import pg2 from './pages/Pagina2';
import pg3 from './pages/Pagina3';
/*Page End*/

export default function App()
{
  return(
    <>
      <header>


      </header>
      <main>
        <Switch>
          <Route path="/pag2" component={pg1}/>
          <Route path="/pag1" component={pg2}/>
          <Route path="/pag3" component={pg3}/>
        </Switch>
      </main>
    </>
  )
}