import './Rsvp.css';
import { useNavigate } from 'react-router-dom';
const RSVP = () => {

  const navigate = useNavigate();
  return (
    <div class="form-container">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <h2>Reservation Form</h2>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
        <label for="date">Date of Arrival</label>
        <input type="date" id="date" name="date" required/>
        <label for="guests">Number of Guests</label>
        <input type="number" id="guests" name="guests" min="1" placeholder="Enter number of guests" required/>
        <button type="submit">Submit</button>
      </form>
      <button id="back_btn" onClick={() => navigate('/')}>Back</button>
    </div>
  );

};

export default RSVP;
