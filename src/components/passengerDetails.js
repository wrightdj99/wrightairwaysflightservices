//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

function PassengerDetails() {
   //Extracts the parameters from the URL as identified in the route path in App.js
   const {flightId} = useParams();
   const [data, setData] = useState();
   const [isLoading, setLoading] = useState(true);
   const navigate = useNavigate();
 
   let count = 0;

   const [errorMessage, setErrorMessage] = useState();
   const [passengerFirstName, setPassengerFirstName] = useState();
   const [passengerLastName, setPassengerLastName] = useState();
   const [passengerMiddleName, setPassengerMiddleName] = useState();
   const [passengerEmail, setPassengerEmail] = useState();
   const [passengerPhone, setPassengerPhone] = useState();
   const [passengerCardNumber, setPassengerCardNumber] = useState();
   const [passengerCardExpirationDate, setPassengerCardExpirationDate] = useState();
   const [passengerCardSecurityCode, setPassengerCardSecurityCode] = useState();
 
   useEffect(() => {
     axios.get('http://localhost:8080/flightservices/flights/'+flightId).then(res=>{
       setData(res.data);
       console.log(res.data);
     })
   }, [])

   function handleSubmit(event){
    event.preventDefault();
    const data={
      flightId: flightId,
      passengerFirstName: passengerFirstName,
      passengerLastName: passengerLastName,
      passengerMiddleName: passengerMiddleName,
      passengerEmail: passengerEmail,
      passengerPhone: passengerPhone,
      passengerCardNumber: passengerCardNumber,
      passengerCardExpirationDate: passengerCardExpirationDate,
      passengerCardSecurityCode: passengerCardSecurityCode
    }

    axios.post('http://localhost:8080/flightservices/reservations',data).then(
      res=>{
        navigate('/confirmRes/'+res.data.id);
      }
    )

  }
  return (
    <div>
      <h1>Confirm Reservation:</h1>
      <h2>Flight Details:</h2>
      <h3>AIRLINE: {data.operatingAirlines}</h3>
      <h3>DEPARTURE CITY: {!isLoading?data.departureCity:""}</h3>
      <h3>ARRIVAL CITY: {!isLoading?data.arrivalCity:""}</h3>
      <h3>DEPARTURE DATE: {!isLoading?moment(data.estimatedDepartureTime, "YYYY-MM-DD hh:mm:ss+ZZ").format("MM/DD/YYYY - hh:mm A"):""}</h3>
      <br/>
      <p>{errorMessage}</p>
      <br/>
      <h2>Passenger Details:</h2>
      <form>
        <p>First Name: <input type="text" name="firstName" onChange={e => setPassengerFirstName(e.target.value)} /></p> 
        <p>Middle Name: <input type="text" name="middleName" onChange={e => setPassengerMiddleName(e.target.value)}/></p> 
        <p>Last Name: <input type="text" name="lastName" onChange={e => setPassengerLastName(e.target.value)}/></p> 
        <p>Phone Number: <input type="text" name="phone" onChange={e => setPassengerPhone(e.target.value)}/></p> 
        <p>Email: <input type="text" name="mail" onChange={e => setPassengerEmail(e.target.value)}/></p> 
      </form>
      <h2>Payment Details:</h2>
      <form>
        <p>Card Number: <input type="text" name="cardNum" onChange={e => setPassengerCardNumber(e.target.value)}/></p> 
        <p>Card Exp Date: <input type='date' name="expDate" onChange={e => setPassengerCardExpirationDate(e.target.value)}/></p> 
        <p>CVV: <input type="password" name="cvv" onChange={e => setPassengerCardSecurityCode(e.target.value)}/></p> 
      </form>
      <br/>
      <Link to={'/'}><button>Back To Homepage</button></Link><br/>
      <button onClick={handleSubmit.bind(this)}>Confirm Reservation</button>
    </div>
  );
}

export default PassengerDetails;
