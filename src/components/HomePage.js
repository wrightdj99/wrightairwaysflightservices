//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import moment from "moment";

function HomePage() {
  //Extracts the parameters from the URL as identified in the route path in App.js
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let count = 0;
  //var formattedDate = moment(flightData.estimatedDepartureTime).format("YYYY-MM-DD hh:mm a");


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
    <Link to={'/CheckIn'}><h2>Click here to check in for a flight</h2></Link>
     <h2>Current Upcoming Flights:</h2>
      <ul>
        {!isLoading?flightData.map(flight=>(
         <li key={uuid()}> 
         <p>OPERATING AIRLINE: {flight.operatingAirlines}<br/></p>
         <p>DEPARTURE CITY: {flight.departureCity}<br/></p> 
         <p>ARRIVAL CITY: {flight.arrivalCity}<br/></p>
         <p>EST. DEPARTURE TIME: {moment(flight.estimatedDepartureTime, "YYYY-MM-DD hh:mm:ss+ZZ").format("MM/DD/YYYY - hh:mm A")}<br/></p> 
         {flight.layover != null ? <p>LAYOVER INFO: {flight.layover}</p>: ""} 
         <Link to={'/PassengerDetails/'+flight.id}>Select</Link>
         </li>
        )):""}
        </ul>
    </div>
  );
}

export default HomePage;
