import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from './Components/Register'
import Home from './Components/Home'
import Login from './Components/Login'
import TicketDetails from './Components/TicketDetails';
import BookTicket from './Components/BookTicket';
import About from './Components/About';
import NoteState from './Context/notes/NotesState';
import UserProfile from './Components/UserProfile';
import AllUsers from './Components/AllUsers';


// <Route path="/Home" element={<Home />} />


export default function App() {
  return (

    <div>
      <NoteState >
        <BrowserRouter>
          <Routes>
          <Route exact
            path="/" element={<Home />} ></Route>
          <Route exact
            path="/Login" element={<Login />} />
            <Route exact
              path="/register" element={<Register />} />
            <Route exact
              path="/bookTicket" element={<BookTicket />} />
            <Route exact
              path="/ticketDetails" element={<TicketDetails />} />
            <Route exact
              path="/About" element={<About />} />
            <Route exact
              path="/UserProfile" element={<UserProfile />} />
            <Route exact
              path="/AllUsers" element={<AllUsers />} />

          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>

  )
}
