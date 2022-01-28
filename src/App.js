import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import HomePage from './HomePage';
import Login from './Login';
import { auth } from './firebase';
import {useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import './App.css';
import Register from './Register'
function App() {
  
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div  className='App'>
      <Header/>
      <Switch>
      <Route  path='/checkoutproduct'>
          <CheckoutProduct/>
        </Route>
      <Route  path='/checkout'>
          <Checkout/>
        </Route>
        <Route path="/login">
       <Login />
        </Route>
        <Route path="/register">
       <Register />
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  )
}

export default App
