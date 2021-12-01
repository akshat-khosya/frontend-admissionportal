import React, {useState} from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
function Contactus() {
  const[mess,setMess]=useState({
    name: "",
    email:"",
    subject: "",
    messa: ""
  });
  function messageChange(e){
    
    const { name, value } = e.target;
    console.log(name);
    
        setMess((prevValue) => {
          console.log(prevValue);
          return {
           
            ...prevValue,
            [name]: value
        }
        });
  }
  function sendMessage(event){
    
    let message={
      
      name: mess.name,
      email: mess.email,
      subject: mess.subject,
      message: mess.messa
    
  }
  setMess({
    name:"",
    email:"",
    subject:"",
    messa:""
  });
  axios.post('https://admissionportaliii.herokuapp.com/contactus', message).then(function (response) {
            console.log(response.data);
           
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
        event.preventDefault();
      }
    return (
      

        <>
    <div class=" section-gap"></div>
      <div class="wrapper">
        
        <h3 class="global-title text-center">Contact us</h3>
        <div class="d-grid contact-view">
          <div class="cont-details">


            <div class="cont-top">

              <div class="cont-left text-center">
              <FontAwesomeIcon className="text-primary"  icon={faPhoneAlt} />
                
              </div>

              <div class="cont-right">
                <h6>Call Us</h6>
                <p><a >+91 9416908474</a></p>
              </div>

            </div>


            <div class="cont-top margin-up">

              <div class="cont-left text-center">
              <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
               
              </div>
              <div class="cont-right">
                <h6>Email Us</h6>
                <p><a  class="mail">akshatdps12@gmail.com</a></p>
              </div>
              
            </div>


            <div class="cont-top margin-up">
              <div class="cont-left text-center">
              <FontAwesomeIcon className="text-primary" icon={faMapMarkerAlt} />
                <span class="fa fa-map-marker text-primary"></span>
              </div>
              <div class="cont-right">
                <h6>Address</h6>
                <p>Haryana,India</p>
              </div>
            </div>
          </div>



          <div class="map-content">
            <form onSubmit={sendMessage}>
              <div class="twice-two">
                <input value={mess.name} onChange={messageChange} required  type="text" class="form-control" name="name" id="w3lName" placeholder="Name"  />
                <input value={mess.email} onChange={messageChange} required type="email" class="form-control" name="email" id="w3lSender" placeholder="Email"
                   />
              </div>

              <div class="twice">
                <input value={mess.subject} onChange={messageChange} required type="text" class="form-control" name="subject" id="w3lSubject" placeholder="Subject"
                   />
              </div>

              <textarea value={mess.messa} onChange={messageChange} required name="messa" class="form-control" id="message" placeholder="Message"
                ></textarea>
              <button type="submit" class="btn btn-contact">Send Message</button>
            </form>
          </div>



        </div>
      </div>
    </>
);
}

export default Contactus;

