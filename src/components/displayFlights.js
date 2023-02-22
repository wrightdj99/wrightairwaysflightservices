//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

function DisplayFlights() {
  //Extracts the parameters from the URL as identified in the route path in App.js
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let count = 0;

  useEffect(() => {
    axios.get('http://localhost:8080/flightservices/flights/').then(res=>{
      setFlightData(res.data);
      setLoading(false);
      console.log(res.data);
    })
  }, [count])
  return (
    <div>
    <h1>Wright Airways Flights</h1>
     <h2>Current Upcoming Flights:</h2>
      <ul>
        {!isLoading?flightData.map(flight=>(
         <li key={uuid()}> 
         OPERATING AIRLINE: {flight.operatingAirlines}<br/> 
         DEPARTURE CITY: {flight.departureCity}<br/> 
         ARRIVAL CITY: {flight.arrivalCity}<br/>
         EST. DEPARTURE TIME: {flight.estimatedDepartureTime}<br/>  
         <Link to={'/PassengerDetails/'+flight.id}>Select</Link>
         </li>
        )):""}
        </ul>
    </div>
  );
}

export default DisplayFlights;
