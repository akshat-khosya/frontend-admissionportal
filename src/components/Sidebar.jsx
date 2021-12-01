import React, { useState ,useEffect} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideMenuData";

function Sidebar(props) {
  
  
  let headings=["Personal Details","AcaddemicDetails"];
  useEffect(()=>{
    
    setHeading(headings[props.index]);
        
    })
  const [sidebar, setSidebar] = useState(
    window.innerWidth > 900 ? true : false
  );
  const[heading,setHeading]=useState("Personal Details");
 const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <div className="sidebar">
        {window.innerWidth < 900 && (
          <a className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        )}
        <h1 className="sidebar-heading">{heading}</h1>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            {window.innerWidth < 900 && (
              <li className="sidebar-toggle">
                <a className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
            )}

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <span>
                   {item.icon} 
                    <span onClick={()=>{props.GoTo(index)}}>{item.title}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Sidebar;
