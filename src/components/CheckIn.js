//import logo from './logo.svg';
//import '../App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

function CheckIn() {

//Handling check-in business
const [passengerReservationID, setPassengerReservationID] = useState();
const [passengerNumberOfBags, setPassengerNumberOfBags] = useState();
const [confirmationMessage, setConfirmationMessage] = useState();

//Hooks for storing flight info when reservation id is entered
const [dataLoading, setDataLoading] = useState(true);
const [flightData, setFlightData] = useState();
const [passengerFirstName, setPassengerFirstName] = useState();
const [passengerLastName, setPassengerLastName] = useState();
const [passengerMiddleName, setPassengerMiddleName] = useState();
const [passengerEmail, setPassengerEmail] = useState();
const [passengerPhone, setPassengerPhone] = useState();
const [passengerCardNumber, setPassengerCardNumber] = useState();
const [passengerCardExpirationDate, setPassengerCardExpirationDate] = useState();
const [passengerCardSecurityCode, setPassengerCardSecurityCode] = useState();
const [errorMessage, setErrorMessage] = useState();

function getFlightInfo(){
  axios.get('http://localhost:8080/flightservices/reservations/'+passengerReservationID).then(res=>{
       setFlightData(res.data);
       setDataLoading(false);
       console.log(res.data);
     })

  
}


function handleSubmit(event){
  event.preventDefault();
  const data = {
    reservationID: passengerReservationID,
    numberOfBags: passengerNumberOfBags,
    checkIn: true
  };
  axios.put('http://localhost:8080/flightservices/reservations', data).then(
    res=>{
      setConfirmationMessage("Your check in was successful!");
    }
  )
}

  return (
    <div>
      <h2>Let's get you checked in for your flight!</h2>
      <h3>Enter your reservation confirmation number and the number of bags you
        estimate you'll be travelling with, then review your flight information to make sure it's correct.
      </h3>
      <p>{errorMessage}</p>
      <form>
        <p>Enter your Reservation ID: <input type='text' name='resID' onChange={e=>setPassengerReservationID(e.target.value)} onFocus={(e) => {setErrorMessage(""); setDataLoading(true);}} onBlur={e=>{e.target.value !== ""?getFlightInfo() : setErrorMessage("This can't be left blank!")}}/></p>
        <p>Enter the number of bags you'll be travelling with: <input type='text' name='numBag' onChange={e=>setPassengerNumberOfBags(e.target.value)}/></p>
      </form>
      <p>OUTGOING FLIGHT ID: {!dataLoading?flightData.flight.id:""}</p>
      <p>OPERATNG AIRLINE: {!dataLoading?flightData.flight.operatingAirlines:""}</p>
      <p>FLIGHT NUMBER: {!dataLoading?flightData.flight.flightNumber:""}</p>
      <p>DEPARTURE: {!dataLoading?flightData.flight.departureCity:""}</p>
      <p>ARRIVAL: {!dataLoading?flightData.flight.arrivalCity:""}</p>
      <p>ESTIMATED DEPARTURE TIME: {!dataLoading?moment(flightData.flight.estimatedDepartureTime, "YYYY-MM-DD hh:mm:ss+ZZ").format("MM/DD/YYYY - hh:mm A"):""}</p>
      <p>LAYOVER INFO: {!dataLoading && flightData.flight.layover != ""?flightData.flight.layover:""}</p>
      <br/>
      <button onClick={handleSubmit.bind(this)}>Confirm Check In</button><br/>
      <Link to={'/'}><button>Back To Homepage</button></Link>
      <p>{confirmationMessage}</p>
    </div>
  );
}

export default CheckIn;