import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer';

const UserProfile = () => {
    
   

  const [user, setUser] = useState('')
  const api = "https://randomuser.me/api/";
  useEffect(()=>{
      userInfo()
  },[])

    let userInfo = async() =>{
       let userData = await axios.get(api).then((res)=>{
            setUser(res?.data?.results[0])
        })
    }

    console.log(user)
    return (
        <>
        <Navbar />
        <div className="user">
        <section >
  <div className="container py-5 ">
    

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={user.picture?.large} alt={user.name?.first}
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3">{user.gender}</h5>
            <p className="text-muted mb-1"></p>
            <p className="text-muted mb-4">{user.email}</p>
            
          </div>
        </div>
       
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.cell}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.phone}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
             <p className="text-muted mb-0">{`${user.location?.city}, ${user.location?.state}, ${user.location?.country}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        <Footer />
        </>
    )
}

export default UserProfile
