//import logo from './logo.svg';
//import '../App.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ConfirmRes() {
  const{reservationId}=useParams();
  return (
    <div>
      <h2>Your reservation is complete. The your flight code is {reservationId}.</h2>
      <br/>
      <Link to={'/'}><button>Back To Homepage</button></Link><br/>
      <Link to={'/CheckIn'}><button>Click here to check in for your flight now</button></Link>
    </div>
  );
}

export default ConfirmRes;
