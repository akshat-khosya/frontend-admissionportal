import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {  useHistory } from "react-router-dom";
import axios from 'axios';
import Popup from '../components/Popup';
import loginsvg from '../images/undraw_secure_login_pdn4.svg'
function Changepassword(){
  const [popupShow, setPopupShow] =useState(false);
  const [popupContent,setPopupContent]=useState({
    heading:"",
    messgae:""
  });
  let history = useHistory();
  const [password,setPassword]=useState({
    oldpass:"",
    newpass:"",
    renewpass:""
  });
  function passChange(e){
    const { name, value } = e.target;
    
    
        setPassword((prevValue) => {
          return {
            ...prevValue,
            [name]: value
        }
        });
  }
  function changePassword(e){
    let thePassword={
      email:Cookies.get('email'),
      pass:Cookies.get('password'),
      oldpass:password.oldpass,
      newpass:password.newpass
    }
    if(password.newpass===password.renewpass){
      axios.post('https://admissionportaliii.herokuapp.com/newpassword', thePassword).then(function (response) {
            if(response.data.status===true){
              history.push("/");
            }
            else{
              setPopupContent({
                heading:"Password did't match",
                message:"Your old passord didn't matches with  new password"
            });    
            setPopupShow(true);
            }
        }).catch(function (error) {
            console.log(error);
        });

    }
    else{
      setPopupContent({
        heading:"Password did't match",
        message:"Your new passord didn't matches with repeat new password"
    });    
    setPopupShow(true);
   
    }
    e.preventDefault();
  }
    return (
        <>
    <section className="sign-in">
    <Popup
        show={popupShow} heading={popupContent.heading} message={popupContent.message}
        onHide={() => setPopupShow(false)}
      />
      <div className="containers">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={loginsvg} alt="" />
            </figure>
           
          </div>

          <div className="signin-form">
            <h2 className="form-title">Change Password</h2>
            <form onSubmit={changePassword}  className="register-form" id="login-form">
            <div className="form-group">
                <label className="label" for="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input className="input"
                  onChange={passChange}
                  type="password"
                  value={password.oldpass}
                  name="oldpass"
                  id="pass"
                  placeholder="Old Password"
                />
              </div>
              <div className="form-group">
                <label className="label" for="newpass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input className="input"
                  onChange={passChange}
                  value={password.newpass}
                  type="password"
                 
                  name="newpass"
                  id="newpass"
                  placeholder="New Password"
                />
              </div>
              <div className="form-group">
                <label className="label" for="renewpass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input className="input"
                  onChange={passChange}
                  type="password"
                  value={password.renewpass}
                  name="renewpass"
                  id="renewpass"
                  placeholder="Repeat New Password"
                />
              </div>
              
              <div className="form-group form-button">
                <input className="input"
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Submit"
                />
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  
  
    </>
);
}
export default Changepassword;

