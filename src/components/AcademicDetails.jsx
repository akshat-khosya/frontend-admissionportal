import React, { useState,useEffect} from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {  useHistory } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

function AcademicDetails() {
    const [readP,setreadP]=useState(false);
    useEffect(() => {
        let email={email:Cookies.get('email')};
        axios.post('https://admissionportaliii.herokuapp.com/formone',email).then(function(response){
            if(response.data.render===2){
                
                setreadP(true);
              setAcademic( {...response.data} )
              
            }
       
      }).catch(function (error) {
        console.log(error);
      });
      
    }, [])
    const[academin,setAcademic]=useState({
        jeeapplication:"",
        jeerank:"",
        jeeperc:"",
        jeestate:"",
        jeeboard:"",
        jeeschool:"",
        jeemathp:0,
        jeemathmp:0,
        jeematht:0,
        jeemathmt:0,
        jeemath:0,
        jeephysicsp:0,
        jeephysicsmp:0,
        jeephysicst:0,
        jeephysicsmt:0,
        jeephysics:0,
        jeechemp:0,
        jeechemmp:0,
        jeechemt:0,
        jeechemmt:0,
        jeechem:0
        
    })
    function handelChange(e){
        const { name, value } = e.target;
        const temp ={
            ...academin,
            [name]:value
        }
        
        
        setAcademic({
          
            ...academin,
            [name]:value,
            jeemath:(+100*((+temp.jeemathp)+(+temp.jeematht)))/((+temp.jeemathmp)+(+temp.jeemathmt)),
            jeephysics:(+100*(+temp.jeephysicsp+(+temp.jeephysicst)))/((+temp.jeephysicsmt)+(+temp.jeephysicsmp)),
            jeechem:(+100*(+temp.jeechemp+(+temp.jeechemt)))/((+temp.jeechemmt)+(+temp.jeechemmp)) 
        
        });
        
        
        
        
    }
    function formTwo(e){
        e.preventDefault();
       const {  
        jeeapplication,
        jeerank,
        jeeperc,
        jeestate,
        jeeboard,
        jeeschool,
        jeemathp,
        jeemathmp,
        jeematht,
        jeemathmt,
        jeemath,
        jeephysicsp,
        jeephysicsmp,
        jeephysicst,
        jeephysicsmt,
        jeephysics,
        jeechemp,
        jeechemmp,
        jeechemt,
        jeechemmt,
        jeechem
       }=academin;
       let data=[Cookies.get('email'),academin];
       console.log(data);
       axios.post('https://admissionportaliii.herokuapp.com/acdemic',data).then(function(response){
    
  
        }).catch(function (error) {
            console.log(error);
        });   
        }


    
    return (
        <>
        <Form onSubmit={formTwo} className="form-submit-1">
        <Form.Group widths="equal">
          <Form.Field
          readOnly={readP}
          onChange={handelChange}
          value={academin.jeeapplication}
            
            
            
            
            required
            name="jeeapplication"
            control={Input}
            label="JEE Application Number"
            placeholder="JEE Application Number"
          />
          <Form.Field
          readOnly={readP}
          onChange={handelChange}
          value={academin.jeerank}
            
            
            
            required
            name="jeerank"
            
            control={Input}
            label="JEE Rank"
            placeholder="JEE Rank"
          />
         
            
        
        
         <Form.Field
         readOnly={readP}
         onChange={handelChange}
         value={academin.jeeperc}
            
            
            
            required
            name="jeeperc"
            
            control={Input}
            label="JEE Percentile"
            placeholder="JEE Percentile"
          />
        </Form.Group>
        
        <Form.Group widths="equal"> 
        <Form.Field
        readOnly={readP}
            onChange={handelChange}
            type="number"
            required
            name="jeemathp"
            value={academin.jeemathp}
            control={Input}
            label="Partical marks in Mathematics"
            placeholder="Partical marks in Mathematics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
           
            required
            name="jeemathmp"
            type="number"
            value={academin.jeemathmp}
            control={Input}
            label="Partical max marks in Mathematics"
            placeholder="Partical max marks in Mathematics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            type="number"
            required
            name="jeematht"
            value={academin.jeematht}
            control={Input}
            label="Theory marks in Mathematics"
            placeholder="Theory marks in Mathematics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            type="number"
            required
            name="jeemathmt"
            value={academin.jeemathmt}
            control={Input}
            label="Theory max marks in Mathematics"
            placeholder="Theory max marks in Mathematics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            
            required
            name="jeemath"
            value={academin.jeemath}
            readOnly
            control={Input}
            label="Percentage in Mathematics"
            placeholder="Percentage in Mathematics"
            />
        

        </Form.Group>
        <Form.Group widths="equal"> 
        <Form.Field
        readOnly={readP}
        onChange={handelChange}
        value={academin.jeephysicsp} 
            required
            name="jeephysicsp"
            
            control={Input}
            label="Partical marks in Physics"
            placeholder="Partical marks in Physics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeephysicsmp} 
            required
            name="jeephysicsmp"
            
            control={Input}
            label="Partical max marks in Physics"
            placeholder="Partical max marks in Physics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeephysicst} 
            required
            name="jeephysicst"
            
            control={Input}
            label="Theory marks in Physics"
            placeholder="Theory marks in Physics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeephysicsmt} 
            required
            name="jeephysicsmt"
            
            control={Input}
            label="Theory max marks in Physics"
            placeholder="Theory max marks in Physics"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeephysics} 
            required
            name="jeephysics"
            readOnly
            control={Input}
            label="Percentage in Physics"
            placeholder="Percentage in Physics"
            />
        

        </Form.Group>
        <Form.Group widths="equal"> 
        <Form.Field
        readOnly={readP}
        onChange={handelChange}
        
            required
            name="jeechemp"
            value={academin.jeechemp}
            control={Input}
            label="Partical marks in chemistry"
            placeholder="Partical marks in chemistry"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeechemmp} 
            required
            name="jeechemmp"
            
            control={Input}
            label="Partical max marks in chemistry"
            placeholder="Partical max marks in chemistry"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeechemt} 
            required
            name="jeechemt"
            
            control={Input}
            label="Theory marks in chemistry"
            placeholder="Theory marks in chemistry"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeechemmt} 
            required
            name="jeechemmt"
            
            control={Input}
            label="Theory max marks in chemistry"
            placeholder="Theory max marks in chemistry"
            />
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeechem} 
            required
            name="jeechem"
            readOnly
            control={Input}
            label="Percentage in chemistry"
            placeholder="Percentage in chemistry"
            />
        

        </Form.Group>
        <Form.Group widths="equal">
            
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeestate} 
            required
            name="jeestate"
            
            control={Input}
            label="Enter State of board for 12th class"
            placeholder="Enter State of board for 12th class"
            />
             <Form.Field
             readOnly={readP}
             onChange={handelChange}
             value={academin.jeeboard} 
            required
            name="jeeboard"
            
            control={Input}
            label="Board Name for 12th class"
            placeholder="Board Name for 12th class"
            />
            
            
            <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={academin.jeeschool} 
            required
            name="jeeschool"
            
            control={Input}
            label="School Name for 12th class"
            placeholder="School Name for 12th class"
            />
            

        </Form.Group>
        {!readP&&<Form.Field
          readOnly={readP}
          onChange={handelChange} className="submit-form-1" control={Button}>
          Submit
        </Form.Field>}
        </Form>
        </>
    )
}

export default AcademicDetails
