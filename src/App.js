//import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import DisplayFlights from './components/DisplayFlights';
import FindFlights from './components/FindFlights';
import passengerDetails from './components/passengerDetails';
import confirmRes from './components/confirmRes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<FindFlights/>}/>
          <Route path='/displayFlights/:from/:to/:departureDate' element={<DisplayFlights/>}/>
          <Route path='/passengerDetails' component={passengerDetails}/>
          <Route path='/confirmReservation' component={confirmRes}/>
      </Routes>
    </div>
  );
}

export default App;
