import React, { useEffect } from 'react'
import axios from 'axios'
import { notification } from 'antd'

function Index(props){
    useEffect(()=>{
        let Signin = {
            
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password')
            
        }
        console.log(Signin.email);
        console.log(Signin.password);
        axios.post('https://admissionportaliii.herokuapp.com/regiss/signin',Signin).then(function(response){
            if(response.data.login===true){
                console.log(response.data.login);
                props.history.push("/dashboard");
                
            }else{
                notification["error"]({
                    message:"Please Login to continue",
                    description:"You have been logout. Please Login again"
                });
                console.log(response.data.login);
                props.history.push("/login");
            }
        }).catch(function (error) {
            if(!error.response.auth){
                notification["error"]({
                    message:"Please Login to continue",
                    description:"You have been logout. Please Login again"
                });
                props.history.push("/login");
            }

        });
        Signin={
            email:"",
            password:""
          }
        
    },[])
    return (
      <>
      </>

    )
}
export default Index