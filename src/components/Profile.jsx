import React, {useState,useEffect} from 'react';
import profilesvg from '../images/profile.svg';
import axios from 'axios';
import {  useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import MyVerticallyCenteredModal from './Inputpopup';
function Profile(){
    const [modalShow, setModalShow] =useState(false);
    const [addnn,setAddnn]=useState("");
    let history = useHistory();
    const [profile,setProfile]=useState({
        name: "Add Name",
        email: "NULL",
        phone: "Add Number"
    });
    useEffect(()=>{
        
        
        let Signin = {
            
            email: Cookies.get('email')
            
        }
            axios.post('https://admissionportaliii.herokuapp.com/profile',Signin).then(function(response){
                if(response.data.user===true){
        
                   if(response.data.phone){
                        if(response.data.name){
                            setProfile({
                            name: response.data.name,
                            email:response.data.email,
                            phone:response.data.phone
                            })
                        }else{
                            setProfile({
                                name: "Add Name",
                                email:response.data.email,
                                phone:response.data.phone
                                })
                        }
                        
                    }else {
                        if(response.data.name){
                            setProfile({
                            name: response.data.name,
                            email:response.data.email,
                            phone:"Add Number"
                            })
                        }else{
                            setProfile({
                                name: "Add Name",
                                email:response.data.email,
                                phone:"Add Number"
                                })
                        }
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
      function addName(event){
          if(event.target.innerHTML==="Add Name"){
              setAddnn("name");
              setModalShow(true);
          }
          else{
              // do nothing
          }
      }
      function addNumber(event){
          if(event.target.innerHTML==="Add Number"){
              setAddnn("number");
            setModalShow(true);
          }
          else{
              // do nothing
          }
      }
    return (
        
        <>
         <MyVerticallyCenteredModal role={addnn}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src={profilesvg} className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 onClick={addName} className="f-w-600">{profile.name}</h6>
                                
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{profile.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className={profile.phone==="Add Number"?"changepointer text-muted f-w-400 color-phone":"text-muted f-w-400 color-phone"} onClick={addNumber}>{profile.phone}</h6>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
);
}
export default Profile;

