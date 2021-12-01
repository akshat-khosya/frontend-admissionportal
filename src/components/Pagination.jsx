import Pagination from 'react-bootstrap/Pagination'
import React,{useState} from 'react';


function PaginationBasic(){
    function changeActive(e){
        setActive(e.target.innerHTML);
    }
    const[newactive,setActive]=useState(0);
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item onClick={changeActive} key={number} active={number === newactive}>
      {number}
    </Pagination.Item>,
  );
}

    return(
  <div>
    
    <div>
    
   

    <Pagination size="lg">{items}</Pagination>
    <br />

   
  </div>
   

   
  </div>
);
    }

export default PaginationBasic;