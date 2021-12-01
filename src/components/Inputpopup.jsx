import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  
         const [number,setNumber]=useState('');
          function changeNumber(e){
             setNumber(e.target.value);
          }
          function numberSubmit(event){
            event.preventDefault();
              let values={
                  email:Cookies.get('email'),
                  phone:number
              };
              let path='https://admissionportaliii.herokuapp.com/';
              if(props.role==='name'){
                path='https://admissionportaliii.herokuapp.com/name';
              }else{
                path='https://admissionportaliii.herokuapp.com/phone';
              }
              
              axios.patch(path,values).then(function(res){
                  props.onHide();
              }).catch(function (error) {
                console.log(error);
            });
            setNumber('');
            
          }

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.role==="name"?"Add your name":"Add your number"}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={numberSubmit} className="register-form" id="login-form">
        <Modal.Body>
          <h4>Enter {props.role==="number"?"Number":"Name"}</h4>
         
          <div className="form-group">
          <label for="phone"><i className="zmdi zmdi-account material-icons-name"></i></label>
          <input onChange={changeNumber} value={number}  required type="text" name="phone" id="phone" placeholder={props.role==="name"?'Enter your Name':'Enter your Number'} />
          </div>
   
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" >Submit</Button>
          
        </Modal.Footer>
        </form>
        
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;