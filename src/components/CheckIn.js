//import logo from './logo.svg';
//import '../App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CheckIn() {

const [passengerReservationID, setPassengerReservationID] = useState();
const [passengerNumberOfBags, setPassengerNumberOfBags] = useState();
const [passengerCheckIn, setPassengerCheckIn] = useState(false);


function handleSubmit(event){
  event.preventDefault();
  setPassengerCheckIn(true);
  const data = {
    reservationID: passengerReservationID,
    numberOfBags: passengerNumberOfBags,
    checkIn: passengerCheckIn
  };
  axios.put('http://localhost:8080/flightservices/reservations', data).then(
    res=>{
      alert("SUCCESS!");
    }
  )
}

  return (
    <div>
      <h2>Let's get you checked in for your flight!</h2>
      <form>
        <p>Enter your Reservation ID: <input type='text' name='resID' onChange={e=>setPassengerReservationID(e.target.value)}/></p>
        <p>Enter the number of bags you'll be travelling with: <input type='text' name='numBag' onChange={e=>setPassengerNumberOfBags(e.target.value)}/></p>
      </form>
      <br/>
      <button onClick={handleSubmit.bind(this)}>Confirm Check In</button><br/>
      <Link to={'/'}>Back To Homepage</Link>
    </div>
  );
}

export default CheckIn;