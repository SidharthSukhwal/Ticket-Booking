import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';;

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

  const userData = () => {

    if (password == cPassword && name !== "" && email !== "") {

      let userData = {
        "name": name,
        "email": email.toLowerCase(),
        "password": password
      }


console.log(userData)


      users.push({ ...userData })

      localStorage.setItem("users", JSON.stringify(users))

    } else {
      toast.error("The details are not correct")
    }
    if (localStorage.length > 0) {
      toast.success("User Registered Successfully")
      navigate("/Login")
    }
  }

  


  return (
    <>
      <Navbar />
      <section className="vh-100" >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center text-white h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                  <form className="mx-1 mx-md-4">

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" onChange={(e) => setName(e.target.value)} />
                        <label className="form-label text-white" htmlFor="form3Example1c">Your Name</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label text-white" htmlFor="form3Example3c" >Your Email</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label text-white" htmlFor="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" className="form-control" onChange={(e) => setCPassword(e.target.value)} />
                        <label className="form-label text-white" htmlFor="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-3">
                     
                      <p className="small fw-bold text-white">Already Registered? <Link to="/Login"
                      className="link-danger">Login</Link></p>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" onClick={() => userData()}>Register</button>
                    </div>

                  </form>

                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
