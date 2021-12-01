import React,{useState,useEffect} from "react";
import {  useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import axios from 'axios';

import Cookies from 'js-cookie';
import HomeIcon from '@mui/icons-material/Home';
function Navbars(props){
  const [userName,setUserName]=useState("Accounts");
  let history = useHistory();
    const[currentValue,setCurrentvalue]=useState("");
    function logout(){
        
        Cookies.remove('email');
        Cookies.remove('password');
        history.push("/");
        
      }
      useEffect(()=>{
        
        
        let Signin = {
            
            email: Cookies.get('email')
            
        }
            axios.post('https://admissionportaliii.herokuapp.com/profile',Signin).then(function(response){
                if(response.data.user===true){
                  if(response.data.name){
                    setUserName(response.data.name); 
                  }else{
                    //nothing
                  }
                    
                }else{
                    history.push("/");
                }
            }).catch(function (error) {
                console.log(error);
            });
            Signin={
              email:""
            }
          
      })
      function currentState(event){
       
        
           if(event.target.innerHTML==="Dashboard &nbsp;&nbsp;"){
             setCurrentvalue("");
           }
           else if(event.target.innerHTML==="Fill Form"){
             setCurrentvalue("application");
           }
           else if(event.target.innerHTML==="Contact Us"){
            setCurrentvalue("contactus");
          }
          else if(event.target.innerHTML==="Profile"){
            setCurrentvalue("profile");
          }
          else if(event.target.innerHTML==="Change Password"){
            setCurrentvalue("newpassword");
          }
           else{
             setCurrentvalue(event.target.innerHTML);
           }
       
      }
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Nav>
    
    <Nav.Link  onClick={(e)=>{currentState(e);props.GoTo(1);}}>Dashboard &nbsp;&nbsp;</Nav.Link>

  </Nav>
  <HomeIcon color="primary" />
  <Navbar.Brand >/ {currentValue}</Navbar.Brand>
  <Nav className="me-auto">
  
      
    </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  <Nav.Link onClick={(e)=>{currentState(e);props.GoTo(2);}}>Fill Form</Nav.Link>
      
      
    </Nav>
    <Nav>
    
      <Nav.Link  onClick={(e)=>{currentState(e);props.GoTo(3);}} >Contact Us</Nav.Link>
     
      <NavDropdown  title={userName} id="collasible-nav-dropdown">
        <NavDropdown.Item  onClick={(e)=>{currentState(e);props.GoTo(4);}} >Profile</NavDropdown.Item>
        <NavDropdown.Item  onClick={(e)=>{currentState(e);props.GoTo(5);}}>Change Password</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={logout}><h6>Logout</h6></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Navbars;