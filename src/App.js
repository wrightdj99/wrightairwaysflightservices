//import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmRes from './components/ConfirmRes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<DisplayFlights/>}/>
          {/* <Route path='/displayFlights/:from/:to/:departureDate' element={<DisplayFlights/>}/> */}
          <Route path='/PassengerDetails/:flightId' element={<PassengerDetails/>}/>
          <Route path='/ConfirmRes/:reservationId' element={<ConfirmRes/>}/>
      </Routes>
    </div>
  );
}

export default App;
