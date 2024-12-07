import './Rsvp.css';
const RSVP = () => {


  return (
    <div class="container">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>Welcome</p>
        <input type="text" placeholder="Name" /><br />
        <input type="date" placeholder="Arrival Date" /><br />
        <input type="text" placeholder="Guest Count" /><br />
        <input type="submit" value="Send" /><br />
      </form>
    </div>
  );

};

export default RSVP;
