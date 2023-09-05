import React, { useEffect, useId } from 'react'
import Navbar from './Navbar'
import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


const TicketDetails = () => {

  let id = useId()
  let ticket = localStorage.getItem('tickets');
  let ticketDetail = JSON.parse(ticket)
  let details = [ticketDetail]

  useEffect(()=>{
    if(sessionStorage.length < 1){
      toast.warn("Please Login")
    }
  })

  let CancelTicket = () => {
    localStorage.removeItem("tickets")
    toast.success("Tickets Canceled")
  }

  const handleDownloadImage = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');

    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Ticket is Downloaded")
  };



  return (
    <div>
      <Navbar />
      <div className="container m-auto">
        <h1 className='text-center mt-4 text-white'>Ticket Details</h1><br />

        {
          sessionStorage.length > 0 && details[0]?.length  ? details[0]?.map((ticket) => (
        <>
              <div className="card"  style={{ width: "18rem" }}>
                <div className="card-body" id='print' >
                  <h5 className="card-title">Destination : {ticket?.place}</h5>
                  <h5 className="card-title">Persons : {ticket?.members}</h5>
                  <h5 className="card-title">Total Fare : {ticket?.fare}</h5>

                  <select className="form-select" aria-label="Default select example">
                    <option defaultChecked>Guidelines for Bus Travel</option>
                    <option value="1">1.Take your seat promptly and sit properly, facing forward at all times.</option>
                    <option value="2">2.Place bags and parcels under your seat or on your lap.</option>
                    <option value="3">3.Keep the aisle of the bus clear at all times.</option>
                    <option value="4">4.Always keep your head, hands and arms inside the bus.</option>
                    <option value="5">5.Throwing objects inside or outside of the bus is not permitted.</option>
                  </select>
                  <br />
                  
                  </div>
                  <div className="buttons m-auto mt-0">
                  <a onClick={handleDownloadImage} className="card-link">Download Ticket </a>  <button onClick={CancelTicket} className="btn btn-secondary btn-sm" style={{ marginInline: "15px" }}>Cancel Ticket</button>
                  </div>
                  </div>
                  <br />
                  </>
            
            ))
            :
            <div className="card mx-auto mt-5 my-auto" style={{width: "50%"}}>
            <img className="card-img-top" src="/img/bigwall.jpg" alt="Card image" width="100" height="300" />
            <div className="card-body">
            <h4 className="card-title mx-auto">No Tickets Available</h4>
            
            <a href="/bookTicket" className="btn btn-primary mx-auto">Book Now</a>
            </div>
            </div>
          }
          </div>
          <ToastContainer />
          <Footer />
    </div>
  )
}

export default TicketDetails

