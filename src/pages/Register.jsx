import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Popup from '../components/Popup';
import svgregister from '../images/undraw_Access_account_re_8spm.svg';
function Register(props){
    const [popupShow, setPopupShow] =useState(false);
  const [popupContent,setPopupContent]=useState({
    heading:"",
    messgae:""
  });
    const [dsignup, newSignup] = useState({
        jeeroll: "",
        email: "",
        pass: "",
        repass: "",
        agreeterm: false
    });
    function handelChange(event) {
        const { name, value } = event.target;


        newSignup((prevValue) => {
            if (name !== "agreeterm")
                return {
                    ...prevValue,
                    [name]: value
                }
            else {
                return {
                    ...prevValue,
                    [name]: !prevValue.agreeterm
                }
            }
        });
    }
    function handelSubmit(event) {
        const Reg = {
            jeeroll: dsignup.jeeroll,
            email: dsignup.email,
            password: dsignup.pass,
            repassword: dsignup.repass
        }
        axios.post('https://admissionportaliii.herokuapp.com/register', Reg).then(function (response) {
            setPopupContent({
                heading:"Error",
                message:response.data
            })    
            setPopupShow(true);
           
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });



        newSignup(() => {
            return {
                jeeroll: "",
                email: "",
                pass: "",
                repass: "",
                agreeterm: false
            }
        })
        event.preventDefault();
    }

    
    useEffect(()=>{
        let Signin = {
              
          email: Cookies.get('email'),
          password: Cookies.get('password')
          
      }

        
          axios.post('http://localhost:4000/register',Signin).then(function(response){
              if(response.data.login===true){
                
                  props.history.push("/dashboard");
                  
              }else{
                
              }
          }).catch(function (error) {
              console.log(error);
          });
          Signin={
            email:"",
            password:""
          }
          
      },[])
      
    return(
        <>
        <section className="signup">
        <Popup
        show={popupShow} heading={popupContent.heading} message={popupContent.message}
        onHide={() => setPopupShow(false)}
      />
                <div className="containers">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form  onSubmit={handelSubmit} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label className="label" for="jeeroll"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input className="input" required 
                                        type="text"  value={dsignup.jeeroll} onChange={handelChange} name="jeeroll" id="jeeroll" placeholder="Enter your Jee Roll" />
                                </div>
                                <div className="form-group">
                                    <label className="label" for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input className="input" required value={dsignup.email} onChange={handelChange}  type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label className="label" for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input className="input" required value={dsignup.pass} onChange={handelChange}  type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label className="label" for="repass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input className="input" required value={dsignup.repass} onChange={handelChange}  type="password" name="repass" id="repass" placeholder="Repeat your password" />
                                </div>
                                <div className="form-group">
                                    <input className="input" required value={dsignup.agreeterm} onChange={handelChange}  type="checkbox" name="agreeterm" id="agreeterm" className="agree-term" />
                                    <label className="label" for="agreeterm" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input  type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={svgregister} alt="sing up image" /></figure>
                            <a href="/"  className="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Register;