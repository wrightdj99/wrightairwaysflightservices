import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function FindFlights() {
//State declarations to help us change the from/to/date fields
  const[from, setFrom] = useState('');
  const[to, setTo] = useState('');
  const[departureDate, setDepartureDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/displayFlights/' + from + '/' + to + '/' + departureDate);
  }
  return (
    <div>
      <h2>Find Flights</h2>
      <form>
        <p>From <input type="text" name="from" onChange={e => setFrom(e.target.value)}/></p>
        <p>To <input type="text" name="to" onChange={e => setTo(e.target.value)}/></p>
        <p>Departure Date <input type="text" name="departureDate" onChange={e => setDepartureDate(e.target.value)}/></p>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default FindFlights;
