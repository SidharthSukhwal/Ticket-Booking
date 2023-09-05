import React, { useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


export default function BookTicket() {

    useEffect(()=>{
        if(sessionStorage.length < 1){
          toast.warn("Please Login")
        }
      })

    let navigate = useNavigate()
    let tickets = localStorage.getItem('tickets') ? JSON.parse(localStorage.getItem('tickets')) : [];
    let users = sessionStorage.getItem('curUser');
    
    let userNew = JSON.parse(users);

    const [user, setUser] = useState(userNew);
    const [members, setMembers] = useState();
    const [place, setPlace] = useState();
   
    const modelOpen1 = useRef(null);

  

    let ticketDetail = {};

    let placefare = [
        { "Lake Palace": 500 },
        { "Udaipur City Palace": 400 },
        { "Jag Mandir": 200 },
        { "Ahar Museum": 300 },
        { "Jagdish Temple": 250 },
        { "Fateh Sagar Lake": 350 },
        { "Sajjangarh Palace": 450 },
        { "Lake Pichola": 550 }
    ]


    placefare.map((e) => {

        if (Object.keys(e).includes(place)) {
            ticketDetail.fare = Object.values(e) * members
        }
    })


    ticketDetail.place = place


    ticketDetail.members = members



    const saveTicket = () => {

        tickets.push({ ...ticketDetail })
        localStorage.setItem('tickets', JSON.stringify(tickets))
        // navigate("/TicketDetails")
        toast.success("Ticket Booked Successfully")
    }

    // let something = (function() {
    //     let executed = false;
    //     return function() {
    //         if (!executed) {
    //             executed = true;
    //            toast.success("User Login Successfully")
    //         }
    //     };
    // })();
    
   


    return (
        <>
            <Navbar />
            <div>
            </div>
            <h1 className='text-center mt-4 text-white'>Ticket Booking</h1><br />

            {
                sessionStorage.length > 0 ?
                    <div className='container-fluid' >



                        <div className='w-50 mt-5 m-auto'>
                            <h3 className='text-white'>{user?.name} Please select the Destination </h3><br />
                            <select className="form-select" aria-label="Default select example" onChange={(e) => setPlace(e.target.value)} >
                                <option defaultChecked>Select</option>
                                <option value={"Lake Palace"} >Lake Palace</option>
                                <option value={"Udaipur City Palace"} >Udaipur City Palace</option>
                                <option value={"Jag Mandir"} >Jag Mandir</option>
                                <option value={"Ahar Museum"} >Ahar Museum</option>
                                <option value={"Jagdish Temple"} >Jagdish Temple</option>
                                <option value={"Fateh Sagar Lake"} >Fateh Sagar Lake  </option>
                                <option value={"Sajjangarh Palace"} >Sajjangarh Palace</option>
                                <option value={"Lake Pichola"} >Lake Pichola</option>
                            </select>

                        </div>
                        <h4></h4>

                        <br />
                        <div className='w-50 mt-3 m-auto'>
                            <h3 className='text-white'>Please select the No. of Persons </h3><br />
                            <select className="form-select" aria-label="Default select example" onChange={(e) => setMembers(e.target.value)} >
                                <option defaultChecked>Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>

                            </select>



                        </div><br />
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-lg mt-5 ' onClick={() => saveTicket()}>Submit</button>
                        </div>
                        <ToastContainer />
                    </div>
                    :
                    <>
                        <div className="card mx-auto mt-5 my-auto" style={{ width: "50%" }}>
                            <img className="card-img-top" src="/img/jalmahal.jpg" alt="Card image" width="100" height="300" />
                            <div className="card-body">
                                <h4 className="card-title mx-auto">Please Login First</h4>

                                <a href="/Login" className="btn btn-primary mx-auto ">Login-In</a>
                            </div>
                        </div>
                    </>


            }
            <Footer />
        </>
    )
}
