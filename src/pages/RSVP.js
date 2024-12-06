import { useNavigate } from 'react-router-dom';
import './Rsvp.css';
const RSVP = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm();
  const handleSubmit = event => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => navigate("/thank-you/"))
      .catch(error => alert(error));
  };


  // return (
  //   <div className="rsvp-container">
  //     <h2 className="rsvp-title">RSVP to Our Wedding</h2>
  //     <form name="rsvp" method="post" data-netlify="true" className="rsvp-form">
  //     <input type="hidden" name="form-name" value="rsvp" />
  //       <div className="form-group">
  //         <label htmlFor="name" className="form-label">Your Name</label>
  //         <input
  //           id="name"
  //           type="text"
  //           {...register('name')}
  //           placeholder="Enter your name"
  //           required
  //           className="form-input"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="email" className="form-label">Your Email</label>
  //         <input
  //           id="email"
  //           type="email"
  //           {...register('email')}
  //           placeholder="Enter your email"
  //           required
  //           className="form-input"
  //         />
  //       </div>
  //       <button type="submit" className="rsvp-submit-btn">Submit</button>
  //     </form>
  //   </div>
  // );

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text"/>
      </label>
      <input type="submit" />
    </form>
  );

};

export default RSVP;
