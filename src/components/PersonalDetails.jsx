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
const countryOptions = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
  { key: "al", value: "al", text: "Albania" },
  { key: "dz", value: "dz", text: "Algeria" },
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "ao", value: "ao", text: "Angola" },
  { key: "ai", value: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", text: "Antigua" },
  { key: "ar", value: "ar", text: "Argentina" },
  { key: "am", value: "am", text: "Armenia" },
  { key: "aw", value: "aw", text: "Aruba" },
  { key: "au", value: "au", text: "Australia" },
  { key: "at", value: "at", text: "Austria" },
  { key: "az", value: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", text: "Barbados" },
  { key: "by", value: "by", text: "Belarus" },
  { key: "be", value: "be", text: "Belgium" },
  { key: "bz", value: "bz", text: "Belize" },
  { key: "bj", value: "bj", text: "Benin" },
  { key: "in", value: "in", text: "India" },
];
const area = [
  { key: "r", text: "Rural", value: "Rural" },
  { key: "u", text: "Urban", value: "Urban" },
];

const ocupation=[
  {key:"ar", text:"Artist"},
  {key:"ba", text:"Business Analyst"},
  {key:"bm", text:"Businessman/Buisnesswoman"},
  {key:"cw", text:"Construction Worker"},
  {key:"de", text:"Designer"},
  {key:"do", text:"Doctor"},
  {key:"en", text:"Engineer"},
  {key:"ep", text:"Entrepreneur"},
  {key:"fr", text:"Freelancer"},
  {key:"po", text:"Politician"},
  {key:"sw", text:"Social Worker"},
  {key:"te", text:"Teacher"},
  {key:"ot", text:"Other"}
  ];
const geoptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
const mainCategory = [
  { key: "open", text: "OPEN", value: "OPEN" },
  { key: "opwd", text: "OPEN-PwD", value: "OPEN-PwD" },
  { key: "sc", text: "SC", value: "SC" },
  { key: "scwd", text: "SC-PwD", value: "SC-PwD" },
  { key: "st", text: "ST", value: "ST" },
  { key: "stwd", text: "ST-PwD", value: "ST-PwD" },

  { key: "obcncl", text: "OBC-NCL", value: "OBC-NCL" },
  { key: "obcpwd", text: "OBC-NCL_PWD", value: "OBC-NCL_PWD" },
  { key: "genes", text: "GEN-EWS-PwD", value: "GEN-EWS-PwD" },
  { key: "genewswd", text: "GEN-EWS-PwD", value: "GEN-EWS-PwD" },
];
const mobileOptions = [{ key: "in", text: "+91", vale: "+91" }];
function PersonalDetails(props) {
  const [readP,setReadOnly]=useState(false);
  let history = useHistory();
  useEffect(() => {
      let email={email:Cookies.get('email')};
      
      axios.post('https://admissionportaliii.herokuapp.com/formone',email).then(function(response){
      if(response.data.render!==0){
        props.stopRest(response.data.render);
        
        setReadOnly(true);
        setPersonal( {...response.data} )
        if(!readP){
        
          const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
          };
        
          window.addEventListener("beforeunload", unloadCallback);
          return () => window.removeEventListener("beforeunload", unloadCallback);
        }
      }
 
}).catch(function (error) {
  console.log(error);
});


  },[])
  const[personal,setPersonal]=useState({
    
    name:"",
    semail:"",
    sgender:"",
    sdob:"",
    religion:"",
    maincategory:"",
    phone:"",
    saadhar:"",
    sarea:"",
    state:"",
    country:"",
    pincode:"",
    permadd:"",
    temadd:"",
    fname:"",
    focupation:"",
    femail:"",
    fnum:"",
    fsalary:"",
    faadh:"",
    mname:"",
    mocupation:"",
    memail:"",
    mnum:"",
    msalary:"",
    maadh:""





  })
  function handelChange(e){
    const { name, value } = e.target;
    
    
        setPersonal((prevValue) => {
          return {
            ...prevValue,
            [name]: value
        }
        });
  }
  function personalFormDetail(e){
    const {name,
    semail,
    sgender,
    sdob,
    religion,
    maincategory,
    phone,
    saadhar,
    sarea,
    state,
    country,
    pincode,
    permadd,
    temadd,
    fname,
    focupation,
    femail,
    fnum,
    fsalary,
    faadh,
    mname,
    mocupation,
    memail,
    mnum,
    msalary,
    maadh
}=personal;
let data=[Cookies.get('email'),personal]
console.log(personal);
axios.post('http://localhost:4000/personal',data).then(function(response){
    
  check(response.data.render);
}).catch(function (error) {
  console.log(error);
});   
  }
  function check(e) {
    props.stopRest(e);
    props.GoTo(e);
  }
  return (
    <>
      <Form onSubmit={personalFormDetail} className="form-submit-1">
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            
            onChange={handelChange}
            value={personal.name}
            required
            name="name"
            control={Input}
            label="Full Name"
            placeholder="Full Name"
          />
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.semail}
            required
            name="semail"
            type="email"
            control={Input}
            label="Student Email"
            placeholder="Student Email"
          />
         
            
        
        
          <Form.Field
            readOnly={readP}>
            <label required>Gender<span className="pd-star">*</span></label>
            <select className="pd-select" disabled={readP}  required placeholder="Gender" value={personal.sgender} onChange={handelChange} id="gender" name="sgender">
            <option >Select....</option>
            {geoptions.map(geoption => (<option>{geoption.text}</option>))}
            </select>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.sdob}
            required
            name="sdob"
            type="date"
            control={Input}
            label="DOB"
            placeholder="DOB"
          />
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.religion}
            required
            name="religion"
            control={Input}
            label="Religion"
            placeholder="Religion"
          />
          <Form.Field
            readOnly={readP}
            
          >
             <label required>Main Category<span className="pd-star">*</span></label>
            <select className="pd-select" disabled={readP} required placeholder="Main Category" value={personal.maincategory} onChange={handelChange}  name="maincategory">
            <option >Select....</option>
            {mainCategory.map(geoption => (<option>{geoption.text}</option>))}
            </select>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.phone}
            required
            name="phone"
            control={Input}
            label="Student Mobile Number"
            placeholder="Student Mobile Number"
          />
          <Form.Field
            readOnly={readP}
            value={personal.saadhar}
            onChange={handelChange}
            required
            name="saadhar"
            control={Input}
            label="Student's Aadhaar Number"
            placeholder="Student's Aadhaar Number"
          />
          <Form.Field
            readOnly={readP}
            
          >
             <label required>Do you belong to <span className="pd-star">*</span></label>
            <select className="pd-select" disabled={readP} required placeholder="Do you belong to" value={personal.sarea} onChange={handelChange}  name="sarea">
            <option >Select....</option>
            {area.map(geoption => (<option>{geoption.text}</option>))}
            </select>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            value={personal.state}
            onChange={handelChange}
            required
            name="state"
            control={Input}
            label="Enter Your State"
            placeholder="Your State"
          />
          <Form.Field
            readOnly={readP}
            
          >
            <label required>Countryoccupation array for html<span className="pd-star">*</span></label>
            <select className="pd-select" disabled={readP} required placeholder="Country" value={personal.country} onChange={handelChange}  name="country">
            <option >Select....</option>
            {countryOptions.map(geoption => (<option>{geoption.text}</option>))}
            </select>
          </Form.Field>
          <Form.Field
            readOnly={readP}
            value={personal.pincode}
            onChange={handelChange}
            required
            name="pincode"
            control={Input}
            label="Pin Code"
            placeholder="Pin Code"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            value={personal.permadd}
            onChange={handelChange}
            required
            name="permadd"
            control={Input}
            label="Your Perment Address"
            placeholder="Your Perment Address"
          />
          <Form.Field
            readOnly={readP}
            value={personal.temadd}
            onChange={handelChange}
            control={Input}
            name="temadd"
            label="Your Temperory Address"
            placeholder="Your Temperory Address"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            value={personal.fname}
            onChange={handelChange}
            required
            name="fname"
            control={Input}
            label="Father's Name"
            placeholder="Father's Name"
          />
          <Form.Field
            readOnly={readP}
           

          >
            <label required>Father's Ocupation<span className="pd-star">*</span></label>
            <select className="pd-select" disabled={readP} required placeholder="Father's Ocupation" value={personal.focupation} onChange={handelChange}  name="focupation">
            <option >Select....</option>
            {ocupation.map(geoption => (<option>{geoption.text}</option>))}
            </select>
            </Form.Field>
          <Form.Field
            readOnly={readP}
            value={personal.femail}
            onChange={handelChange}
            required
            name="femail"
            type="email"
            control={Input}
            label="Father's Email"
            placeholder="Father's Email"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            value={personal.fnum}
            onChange={handelChange}
            required
            name="fnum"
            control={Input}
            label="Father's Mobile Number"
            placeholder="Father's Mobile Number"
          />
          <Form.Field
            readOnly={readP}
            value={personal.fsalary}
            onChange={handelChange}
            required
            name="fsalary"
            control={Input}
            label="Father's Salary in INR"
            placeholder="Father's Salary in INR"
          />
          <Form.Field
            readOnly={readP}
            value={personal.faadh}
            onChange={handelChange}
            required
            name="faadh"
            control={Input}
            label="Father's Aadhaar Number"
            placeholder="Father's Aadhaar Number"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.mname}
            required
            name="mname"
            control={Input}
            label="Mother's Name"
            placeholder="Mother's Name"
          />
          <Form.Field
            readOnly={readP}
           

           >
             <label required>Monther's Ocupation<span className="pd-star">*</span></label>
             <select className="pd-select" disabled={readP} required placeholder="Mother's Ocupation" value={personal.mocupation} onChange={handelChange}  name="mocupation">
             <option >Select....</option>
             {ocupation.map(geoption => (<option>{geoption.text}</option>))}
             </select>
             </Form.Field>
          
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.memail}
            required
            name="memail"
            type="email"
            control={Input}
            label="Mother's Email"
            placeholder="Mother's Email"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            readOnly={readP}
            onChange={handelChange}
            value={personal.mnum}
            required
            name="mnum"
            control={Input}
            label="Mother's Mobile Number"
            placeholder="Mother's Mobile Number"
          />
          <Form.Field
            readOnly={readP}
            value={personal.msalary}
            onChange={handelChange}
            required
            name="msalary"
            control={Input}
            label="Mother's Salary in INR"
            placeholder="Mother's Salary in INR"
          />
          <Form.Field
            readOnly={readP}
            value={personal.maadh}
            onChange={handelChange}
            required
            name="maadh"
            control={Input}
            label="Mother's Aadhaar Number"
            placeholder="Mother's Aadhaar Number"
          />
        </Form.Group>

        {!readP&&<Form.Field
          readOnly={readP}
          onChange={handelChange} className="submit-form-1" control={Button}>
          Submit
        </Form.Field>}
      </Form>
    </>
    
  );
}

export default PersonalDetails;
