import React from 'react'
import { Link } from 'react-router-dom'

import "./login.css"
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");


  let userdata = localStorage.getItem("users")
  let user = JSON.parse(userdata)

  let curUser = {
    "email": email,
    "password": password
  }

  const login = () => {
    let alert1 = true

    user.map((u) => {
      if (curUser.email == u.email && curUser.password == u.password) {
        alert1 = false
        sessionStorage.setItem("curUser", JSON.stringify(u))
        navigate("/bookTicket")
      }

    })
    if (alert1 == true) {
      toast.warn("This is not A Registered Account! Or Wrong Email Password.")
    }
  }
  return (
    <div>
    
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>


                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Log-In</p>


                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)} />
                  <label className="form-label text-white" htmlFor="form3Example3" >Email address</label>
                </div>

                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg "
                    placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                  <label className="form-label text-white" htmlFor="form3Example4" >Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label text-white" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>

                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-outline-primary btn-lg"
                    onClick={login} style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                   
                  <p className="small fw-bold mt-2 pt-1 mb-0 text-white">Don't have an account? <Link to="/register"
                    className="link-danger">Register</Link></p>
                </div>

                </form>
                </div>
                </div>
                </div>
                </section>
                <Footer />
                <ToastContainer />
      
      </div>
  )
}
