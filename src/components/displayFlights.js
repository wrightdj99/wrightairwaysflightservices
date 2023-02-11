//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

function DisplayFlights() {
  //Extracts the parameters from the URL as identified in the route path in App.js
  const {from, to, departureDate} = useParams();
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let count = 0;

  useEffect(() => {
    axios.get('http://localhost:8080/flightservices/flights?from='+from+'&to='+to+'&departureDate='+departureDate).then(res=>{
      setFlightData(res.data);
      setLoading(false);
      console.log(res.data);
    })
  }, [count])
  return (
    <div>
     <h2>Flights:</h2>
      <ul>
        {!isLoading?flightData.map(flight=>(
         <li key={uuid()}> 
         OPERATING AIRLINE: {flight.operatingAirlines}<br/> 
         DEPARTURE CITY: {flight.departureCity}<br/> 
         ARRIVAL CITY: {flight.arrivalCity}<br/>
         EST. DEPARTURE TIME: {flight.estimatedDepartureTime}<br/>  
         <Link to={'/passengerDetails/'+flight.id}>Select</Link>
         </li>
        )):""}
        </ul>
    </div>
  );
}

export default DisplayFlights;
