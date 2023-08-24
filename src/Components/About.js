import React, { useContext, useEffect, useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import noteContext from '../Context/notes/NoteContext'
import SimpleMap from './Location'



const About = () => {

    let ConnectForm = localStorage.getItem("ContactForm")?JSON.parse(localStorage.getItem("ContactForm")):[ ]
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    
    
    const a = useContext(noteContext)
    useEffect(() => {
        a.update()
    }, [])

    
    
    let contactForm = {

        "name" : name,
        "email" : email,
        "subject" : subject,
        'message' : message
    }
    
    
    ConnectForm.push({ ...contactForm }) 
    
    const Submit = () =>{
        localStorage.setItem("ContactForm", JSON.stringify(ConnectForm))
    }

    return (
        <div>
            <Navbar />
            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading text-white">About Us </h1>
                        <p className="lead text-white">You are our responsibility until you are on our bus.We are the safest busThe air-conditioned bus.Seeing you smile is our priority</p>
                        <p>
                            <a href="/bookTicket" className="btn btn-primary m-2">Book</a>
                            <a href="/register" className="btn btn-secondary m-2">Register Now</a>
                        </p>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" alt="" style={{ height: "225px", width: "100%", display: "block" }} src="/img/bus1.jpg" data-holder-rendered="true" />
                                    <div className="card-body">
                                        <p className="card-text">The good bus with a high service</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    View
                                                </button>
                                            </div>
                                            <small className="text-muted">2010</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" data-src="" alt="" src="/img/bus2.webp" data-holder-rendered="true" style={{ height: "225px", width: "100%", display: "block" }} />
                                    <div className="card-body">
                                        <p className="card-text">Everything is available on the bus.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    View
                                                </button>

                                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">About Busses</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>In 1828 between La Madeleine and La Bastille in Paris, the first omnibus service started. The word was coined after the name of a hat shop in Nantes called Omnes Omnibus where the first bus line terminated in an early trial. The word omnibus is derived from Latin, meaning for all. The name stuck and the word bus is now recognized in the majority of languages on earth. <br />
                                                                    Paul Stender, a petrol-head from the US, and his team of engineers modified a typical yellow American school bus with a GE J-79 jet engine from a McDonnell Douglas F4 Phantom II. It set the fastest speed ever recorded by a bus at an eye-watering 590 kph (367 mph).</p>
                                                            </div>
                                                            <div className="modal-footer">

                                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <small className="text-muted">2010</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" data-src="" alt="" src="/img/bus3.webp" data-holder-rendered="true" style={{ height: "225px", width: "100%", display: "block" }} />
                                    <div className="card-body">
                                        <p className="card-text">The best flying on the bus.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    View
                                                </button>
                                            </div>
                                            <small className="text-muted">2010</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-us d-inline">
                                <div className="form">
                                    <section className="mb-4">

                                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                                        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                            a matter of hours to help you.</p>

                                        <div className="row">

                                            <div className="col-md-9 mb-md-0 mb-5">
                                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                                    <div className="row">

                                                        <div className="col-md-6">
                                                            <div className="md-form mb-0">
                                                                <input type="text" id="name" name="name" className="form-control" onChange={(e)=>setName(e.target.value)} />
                                                                <label htmlFor="name" className="">Your name</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="md-form mb-0">
                                                                <input type="text" id="email" name="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)} />
                                                                <label htmlFor="email" className="">Your email</label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="md-form mb-0">
                                                                <input type="text" id="subject" name="subject" className="form-control"  onChange={(e)=>setSubject(e.target.value)}/>
                                                                <label htmlFor="subject" className="">Subject</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">

                                                        <div className="col-md-12">

                                                            <div className="md-form">
                                                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"  onChange={(e)=>setMessage(e.target.value)}></textarea>
                                                                <label htmlFor="message">Your message</label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </form>

                                                <div className="text-center text-md-left">
                                                    <a className="btn btn-primary" onClick={()=>Submit()} >Send</a>
                                                </div>
                                                <div className="status"></div>
                                            </div>

                                            <div className="col-md-3 text-center">
                                                <ul className="list-unstyled mb-0">
                                                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                                        <p>D-Block, Malviya Nagar, Jaipur</p>
                                                    </li>

                                                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                                        <p>+918306523783</p>
                                                    </li>

                                                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                                        <p>contact@ticketbook.com</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                    </section>
                                </div>

                                <div className="map">
                                    <SimpleMap />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>


            <Footer />
        </div>
    )
}

export default About
