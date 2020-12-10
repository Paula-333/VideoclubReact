 
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header'
import PeliculasItem from './Components/PeliculasItem/PeliculasItem'
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Alquilar from './containers/Alquilar/Alquilar';
import Rent from './Components/Rent/Rent'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){

      axios.get('http://localhost:3001',{headers:{Authorization:token}})
      .then(res=>setUser(res.data))
    }
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/alquilar" component={Alquilar} exact/>
        <Route path="/rent" component={Rent} exact/>
        <Route path="/peliculaDescripcion" exact component={PeliculasItem} />
        <Route path="/peliculaBuscar" exact component={PeliculasItem} />
        <Route path="/register" component={Register} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;