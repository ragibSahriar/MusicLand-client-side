import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { app } from '../Firebase/Firebase.init';
import { AuthContext } from '../AuthProvider/Authprovider';
import Lottie from "lottie-react";
import loginanime from '../assets/Lotties/login.json'
const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
      const {signIn} = useContext(AuthContext)
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || ('/')
      
    
    const handleGoogleSignIn = () => {
          
    signInWithPopup(auth, googleProvider)
      .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          navigate(from, { replace: true });
          setUserId(loggedInUser);
      })
      .catch(error => {
          console.log(error);
      })
      // navigate("/")
  }
  // const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("login");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      navigate(from, { replace: true });
      console.log(user);
      // navigate("/")
    })
    .catch (error => console.log(error))
  };
  
      return (
          <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="">
              <div className="">
              <Lottie animationData={loginanime}></Lottie>
              
              </div>
              </div>
              <div  data-aos="fade-down" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1 className="text-5xl text-center font-bold text-sky-600">
                    Login
                  </h1>
                  <form onSubmit={handleLogin}>
                    <div  data-aos="fade-down" className="form-control">
                      <label className="label">
                        <span className="label-text">E-mail</span>
                      </label>
                      <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="text"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input data-aos="fade-up"
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="login"
                      />
                    </div>
                  </form>
                  <div className="text-center">
                  <button className='bg-green-500 px-7 py-2 rounded text-white' onClick={handleGoogleSignIn}><p>google</p></button>
                  </div>
    
                  <p className="my-4 text-center text-sm">
                    Don't Have account?{" "}
                    <Link to="/signup" className="text-green-500 font-bold">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };

export default Login;