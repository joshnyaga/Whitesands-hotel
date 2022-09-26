import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import img from "../img/sarova-whitesands-beach.jpg";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <div>
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
        SAROVA WHITESANDS HOTEL BOOKING
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
          There is only one boss. The Guest.
        </h1>
        <Link to="/home">
          <button className="btn btn-primary landingBtn">Get Started</button>
        </Link>
      </div>
    </div>
    <section>
      <h1 className="text-center p-5">About us</h1>
      <div className="row">
        <div className="col-md-6 text-center p-5">
          <h2>Whitesands Hotel</h2>
          <h3>Sarova Whitesands Beach Resort and Spa</h3>
          <p>Sarova Whitesands Beach Resort and Spa is amongst the best hotels in Mombasa. It is both a luxury beach hotel as well as an adventure beach resort offering world class facilities and activities to both corporate travellers and families looking for fun and recreation. Our beachfront location on the pristine white sandy beaches of Mombasa makes it the ideal place to relax and enjoy all that Kenya has to offer you.</p>

          <p>Half an hour from Mombasa's city centre and 21 kilometres from Mombasa's Moi International Airport, Sarova Whitesands is the ideal place to stay when visiting Mombasa. Whether you're travelling on business or pleasure, our beach hotel in Mombasa will leave you feeling completely rejuvenated.</p>
        </div>
        <div className="col-md-6">
          <br/>
          <img className="img-fluid" src={img}/>
        </div>
      </div>
    </section>
    </div>
  );
}

export default LandingScreen;
