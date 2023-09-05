import React from 'react'
import { Link } from 'react-router-dom'
import { Spaces } from './comonfunc'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "./navbar.css"

export default function Navbar() {

const navigate = useNavigate()

  const logout = () => {
    toast.success("Logout Successfully")
    sessionStorage.clear()
    navigate("/login")
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="main">
        </div>
        <div className="container-fluid ">

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto " >
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="navbar-brand" to="/">{window.location.pathname !== "/" ? Spaces(window.location.pathname.substring(1)) : "Ticket Book"}</Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/BookTicket">Book Ticket</Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/TicketDetails">Ticket Details</Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/UserProfile">User Profile </Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/AllUsers">All  Users </Link>
              </li>
              <li className="nav-item" style={{ paddingInline: "20px" }}>
                <Link className="nav-link" to="/About">About</Link>
              </li>


            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
            </form>
            <hr />
          </div>
        </div>
        </nav>
        <ToastContainer />
    </>
  )
}
