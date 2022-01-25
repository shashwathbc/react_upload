import React , { useState } from 'react';
import "./Login.css";
import logo from "../images/logo.png";
import { Link , useNavigate} from 'react-router-dom';
import  {auth} from "../firebase";

function Login() {
  let navigate = useNavigate();

  // //
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const signIn = e => {
          e.preventDefault();
          // firebase stuff below :
          auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
            // navigate.push('/')
            navigate("/", { replace: true });
          })
          .catch(error => alert(error.message))
  } 

  const register = e => {
    e.preventDefault();

  //   // firebase stuff below
    auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                  // navigate.push('/')
                  navigate("/", { replace: true });
                }
                // console.log(auth);
            })
            .catch(error => alert(error.message))
  }
   


  return (
  <div className='login'>
    <Link to= "/">
      <img  className="login_logo" src={logo} alt="" />
      </Link>
        {/* email paswd  */}
     <div className="login_container">
         <h1 className='white'>Sign-In</h1>
         <form>
           <h5 className='white'>E-Mail</h5>
           <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

           <h5 className='white'>Password</h5>
           <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

           <button type='submit' onClick={signIn}
            className='login_signInButton'>Sign In
            </button>
         </form>
         <p className='white'>
           By sigining in you agree to our Conditions 
           of use & Sale. PLease see our Privacy Notice , 
           Our cookies Notice and our Interest Based ads.
         </p>

         <button onClick={register}
          className='login_registerButton'>Create your Account!</button>

     </div>

  </div>
  )
}

export default Login;
