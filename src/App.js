import React , { useEffect } from 'react';
import './App.css';
import Home from "./Components/Home";
import Header from "./Components/Header"
import Checkout from "./Components/Checkout";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';

function App() {
// from stateprovider:
const [{} , dispatch] = useStateValue();


//tis will run when the components loads 
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
   

   <div className="app">
     
                            
  <Router>

 
 
  <Routes>
    
    <Route exact path="/"element={[<Header/> ,<Home/> ] }/>
    <Route exact path="/checkout"element={[<Header/>,<Checkout />] }/>
    <Route exact path="/login"element={<Login />}/>
     
  </Routes>

  
</Router>  
      
     </div>







  );
}

export default App;
