import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
        <footer className="text-center text-lg-start bg-light text-muted">
          
        
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Ticket Book
                  </h6>
                  <p>
                  1. We Plan, You Enjoy. <br />
                  1. A Destination For The New Millennium. <br />
                  3. Because Every Mile Should Be Worthwhile. 
                  </p>
                </div>
        
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <Link to="/bookTicket" className="text-reset">Tickets</Link>
                  </p>
                  <p>
                    <Link to="/ticketDetails" className="text-reset">Details</Link>
                  </p>
                  
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <Link to="/" className="text-reset">Pricing</Link>
                  </p>
                  <p>
                    <Link to="/" className="text-reset">Settings</Link>
                  </p>
                  
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> Malviya Nagar, Jaipur Rajasrthan </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@ticketbook.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 91 8306523783</p>
                  <p><i className="fas fa-print me-3"></i> + 91 8290376242</p>
                </div>
              </div>
            </div>
          </section>
        
          <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
            © 2023 Copyright:
            <Link className="text-reset fw-bold" to="/https://mdbootstrap.com/">ticketbook.com</Link>
          </div>
        </footer>
        </div>
    )
}
