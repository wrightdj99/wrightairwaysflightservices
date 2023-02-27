//import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PassengerDetails from './components/PassengerDetails';
import ConfirmRes from './components/ConfirmRes';
import CheckIn from './components/CheckIn';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          {/* <Route path='/displayFlights/:from/:to/:departureDate' element={<DisplayFlights/>}/> */}
          <Route path='/PassengerDetails/:flightId' element={<PassengerDetails/>}/>
          <Route path='/ConfirmRes/:reservationId' element={<ConfirmRes/>}/>
          <Route path='/CheckIn' element={<CheckIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
