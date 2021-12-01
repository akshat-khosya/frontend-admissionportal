import React,{useEffect, useState } from 'react';
import axios from 'axios';
import {  useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import Navbars from '../components/Navbar';
import Instruction from '../components/Instruction';
import Application from '../components/Application';
import Contactus from '../components/Contactus';
import Profile from '../components/Profile';
import Changepassword from '../components/Changepassword';
function Dashboard(props){
  let history = useHistory();
  const [render,setRender]=useState(0);
  const handelRender =(link)=>{
    setRender(link);
  }
  useEffect(()=>{
    
    let Signin = {
          
      email: Cookies.get('email'),
      password: Cookies.get('password')
      
      
  }

    
      axios.post('https://admissionportaliii.herokuapp.com/login',Signin).then(function(response){
          if(response.data.login===true){
            
              
              
          }else{
            history.push("/");
          }
      }).catch(function (error) {
          console.log(error);
      });
      Signin={
        email:"",
        password:""
      }
     
        
      
  })
  
    return(
        <>
         
         <Navbars GoTo={handelRender} />
         <main >

        
         {
           render===0 && <Instruction GoTo={handelRender} />
         }
        {
            render==1 && <Instruction GoTo={handelRender}/>
        }
        {
            render==2 && <Application />
        }
        {
            render==3 && <Contactus />
        }
        {
            render==4 && <Profile />
        }
        {
            render==5 && <Changepassword />
        }
          </main>
        </>
    )
}
export default Dashboard;