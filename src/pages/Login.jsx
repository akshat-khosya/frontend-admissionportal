import React, {useEffect,useState} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Popup from '../components/Popup';
import loginsvg from '../images/undraw_secure_login_pdn4.svg'
function Login(props) {
  const [popupShow, setPopupShow] =useState(false);
  const [popupContent,setPopupContent]=useState({
    heading:"",
    messgae:""
  });
    useEffect(()=>{
      let Signin = {
            
        email: Cookies.get('email'),
        password: Cookies.get('password')
        
    }
        axios.post('https://admissionportaliii.herokuapp.com/login',Signin).then(function(response){
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
    const [dsignin, newSignin] = useState({
    
        email: "",
        pass: ""
    });
    function handelChange(event) {
        const { name, value } = event.target;
    
    
        newSignin((prevValue) => {
          return {
            ...prevValue,
            [name]: value
        }
        });
    }
    function handelSubmit(event) {
        const Signin = {
            
            email: dsignin.email,
            password: dsignin.pass
            
        }
        
         axios.post('http://localhost:4000/login', Signin).then(function (response) {
             
            if(response.data.login===true){
              console.log(response.data);
              Cookies.set('email',response.data.email,{expires:1});
              Cookies.set('password',response.data.password,{expires:1});
             
              props.history.push('/dashboard');
              
            }else if(response.data.verification===false){
              setPopupContent({
                heading:"Email Verifcation",
                message:"Please verify your mail. Don't forgot to check in spam. For furthur quries contact adminstration."
              });
              setPopupShow(true);
              
                
            
              
            }
            else{
              setPopupContent({
                heading:"Incorrect creditential",
                message:"Please check your Email and Password."
              });
              setPopupShow(true);
                
            
              
            }
             return response.data;
         }).catch(function (error) {
                 console.log(error);
             });
      
      
      
        newSignin(() => {
            return {
                
                email: "",
                pass: "",
            
                agreeterm: false
            }
        })
        event.preventDefault();
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
              <a href="/register"  className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handelSubmit} className="register-form" id="login-form">
              <div className="form-group">
              <label className="label" for="email"><i className="zmdi zmdi-email"></i></label>
              <input className="input" onChange={handelChange} type="email" value={dsignin.email}  name="email" id="email" placeholder="Your Email"/>
              </div>
                <div className="form-group">
                  <label className="label" for="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input className="input"
                    onChange={handelChange}
                    type="password"
                    value={dsignin.pass}
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                
                <div className="form-group form-button">
                  <input className="input"
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
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

export default Login
