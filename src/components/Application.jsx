import React,{useState} from 'react';
import Sidebar from './Sidebar';

import PersonalDetails from './PersonalDetails';

import AcademicDetails from './AcademicDetails';
function Application(){
    
    const[restrict,setRestrict]=useState(0);
    const[render,setRender]=useState(0); 
    function handelRestrict(linka){
        console.log(linka);
        setRestrict(linka);
    }
    const handelRender =(link)=>{
        
        if(link<=restrict){
            setRender(link);
            
        }else{
            setRender(restrict);
        }
        
      }
    return (
        <>
        <Sidebar  index={render} GoTo={handelRender}/>
        <section className="application-main">
            <div className="application-main__container">
                <div className="application-main-item item-1">
                    {render===0 && <PersonalDetails  GoTo={handelRender} stopRest={handelRestrict}/>}
                    {render===1 && <AcademicDetails />}
                    
                </div>
                
            </div>
        </section>
       
        

        </>
);
}
export default Application;

