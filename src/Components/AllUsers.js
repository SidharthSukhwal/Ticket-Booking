import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer';


const AllUsers = () => {

    const [user, setUser] = useState([])
    const [itemOffset, setItemOffset] = useState(0);


    const api = "https://randomuser.me/api/";

   


    useEffect(() => {
        userInfo()
    }, [])

    let userInfo = async () => {
        await axios.get(api).then((res) => {
            setUser([...user, res?.data?.results[0]])
            console.log([...user, res?.data.results[0]])
        })
    }

    console.log(user)

   


    return (
        <div>
            <Navbar />
        
            <div className="table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user && user.length > 0 && user.map((u) => (

                                 <tr>
                                    <td>{`${u.name?.title} ${u.name?.first} ${u.name?.last}`}</td>
                                    <td>{u.email}</td>
                                    <td>{u.cell}</td>
                                    <td>{u.phone}</td>
                                    <td>{`${u.location?.city}, ${u.location?.state}, ${u.location?.country}`}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-center ">
                    <button onClick={userInfo} className="btn btn-secondary mb-4">Add More</button>
                </div>
            </div>
            <Footer />
   
                            </div >
                            )
                        }

export default AllUsers
